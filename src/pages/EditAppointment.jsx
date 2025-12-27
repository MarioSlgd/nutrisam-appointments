import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import "./form.css";

const EditAppointment = ({ appointments, onUpdateAppointment }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <Layout>
      <div className="form-page">
        <div className="form-card">
          <h2 className="form-title">Editar cita</h2>

          {error && <p className="form-error">{error}</p>}

          <form className="form" onSubmit={handleSubmit}>
            <Input
              id="patientName"
              label="Nombre del paciente"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />

            <Input
              id="date"
              label="Fecha"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <div className="form-actions">
              <Button
                type="button"
                onClick={() => navigate("/appointments")}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Guardando..." : "Actualizar cita"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditAppointment;
