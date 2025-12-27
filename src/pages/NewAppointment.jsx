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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!patientName || !date) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const newAppointment = createAppointment(patientName, date);

    onAddAppointment(newAppointment);

    setPatientName("");
    setDate("");

    // Simulamos un pequeño delay para UX (luego será backend real)
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/appointments");
    }, 600);
  };

  return (
    <Layout>
      <div className="form-page">
        <div className="form-card">
          <h2 className="form-title">Nueva cita</h2>

          {error && <p className="form-error">{error}</p>}

          <form className="form" onSubmit={handleSubmit}>
            <Input
              id="patientName"
              label="Nombre del paciente"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              error={!patientName && error}
            />

            <Input
              id="date"
              label="Fecha"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              error={!date && error}
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
                {isSubmitting ? "Guardando..." : "Guardar cita"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewAppointment;
