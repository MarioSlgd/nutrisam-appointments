import { useState } from "react";
import { createAppointment } from "../services/appointmentsService";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import "./form.css";
const NewAppointment = ({ onAddAppointment }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
    navigate("/appointments");
  };

  return (
    <Layout>
      <div className="form-card">
        <h2 className="form-title">Nueva cita</h2>

        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit} className="form">
          <div>
            <Input
              label="Nombre del paciente"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <Input
              label="Fecha"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <Button type="submit">Guardar cita</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewAppointment;
