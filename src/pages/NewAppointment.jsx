import { useState } from "react";
import { createAppointment } from "../services/appointmentsService";

import Input from "../components/Input";
import Button from "../components/Button";

const NewAppointment = ({ onAddAppointment }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!patientName || !date) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");

    // 👉 AQUÍ se crea la cita
    const newAppointment = createAppointment(patientName, date);

    // 👉 AQUÍ se guarda en App.jsx
    onAddAppointment(newAppointment);

    // Limpiamos formulario
    setPatientName("");
    setDate("");
  };

  return (
    <div>
      <h2>Nueva cita</h2>

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

        <Button type="submit">Guardar cita</Button>
      </form>
    </div>
  );
};

export default NewAppointment;
