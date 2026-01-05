import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import { FiSave } from "react-icons/fi";

import { toTitleCase } from "../utils/textUtils";

import "./form.css";

const generateTimeSlots = () => {
  const slots = [];
  let hour = 10;
  let minute = 0;

  while (hour < 19 || (hour === 19 && minute === 0)) {
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");
    slots.push(`${formattedHour}:${formattedMinute}`);

    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return slots;
};

const NewAppointment = ({ onAddAppointment }) => {
  const navigate = useNavigate();

  //  Estados del formulario
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!patientName || !date || !time || !reason || !age || !phone || !sex) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const newAppointment = {
      id: Date.now(),
      patientName,
      date,
      time,
      reason,
      age,
      phone,
      sex,
    };

    const success = onAddAppointment(newAppointment);

    if (!success) {
      setIsSubmitting(false);
      setError("Ya existe una cita en ese día y horario");
      return;
    }

    setPatientName("");
    setDate("");
    setTime("");
    setReason("");
    setAge("");
    setPhone("");
    setSex("");

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
          <p className="form-subtitle">
            Ingresa la información del paciente y la cita
          </p>
          {error && <p className="form-error">{error}</p>}

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3 className="form-section-title">Paciente</h3>

              <Input
                id="patientName"
                label="Nombre del paciente"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                onBlur={() => setPatientName(toTitleCase(patientName))}
              />

              <Input
                label="Edad"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <Input
                label="Teléfono"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <div className="input-group">
                <label>Sexo</label>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Cita</h3>

              <Input
                label="Fecha"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <div className="input-group">
                <label>Hora</label>
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Selecciona una hora</option>
                  {generateTimeSlots().map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Motivo de la consulta</label>
                <textarea
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
            </div>

            <div className="form-actions">
              <Button
                variant="secondary"
                onClick={() => navigate("/appointments")}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Guardando cita..."
                ) : (
                  <>
                    <FiSave size={16} />
                    Guardar cita
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewAppointment;
