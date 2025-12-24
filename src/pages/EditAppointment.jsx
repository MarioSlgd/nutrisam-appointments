import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

const EditAppointment = ({ appointments, onUpdateAppointment }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment.id === Number(id)
    );

    if (!appointmentToEdit) {
      navigate("/appointments");
      return;
    }

    setPatientName(appointmentToEdit.patientName);
    setDate(appointmentToEdit.date);
  }, [id, appointments, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!patientName || !date) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");

    onUpdateAppointment({
      id: Number(id),
      patientName,
      date,
    });

    navigate("/appointments");
  };

  return (
    <div>
      <h2>Editar cita</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre del paciente"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <Input
          label="Fecha"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button type="submit">Guardar cambios</Button>
      </form>
    </div>
  );
};

export default EditAppointment;
