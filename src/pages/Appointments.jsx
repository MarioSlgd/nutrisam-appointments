import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { FiEdit2, FiTrash2, FiPlus, FiEye, FiSearch } from "react-icons/fi";
import "./appointments.css";

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const formatAppointmentDate = (date, time) => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");

  const dateObj = new Date(year, month - 1, day, hours, minutes);

  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(dateObj);

  const formattedTime = new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(dateObj);

  return `${capitalize(formattedDate)} – ${formattedTime}`;
};

const Appointments = ({ appointments, onDeleteAppointment }) => {
  const [search, setSearch] = useState("");

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="appointments-page">
        <div className="appointments-header">
          <h2>Mis citas</h2>

          <Link to="/appointments/new">
            <Button>
              <FiPlus />
              Nueva cita
            </Button>
          </Link>
        </div>

        <div className="appointments-search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por nombre del paciente…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredAppointments.length === 0 ? (
          <div className="appointments-empty">
            <p>
              {search
                ? "No se encontraron citas con ese nombre"
                : "No hay citas registradas"}
            </p>
          </div>
        ) : (
          <div className="appointments-list">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                {/* INFO */}
                <div className="appointment-info">
                  <h3 className="appointment-name">
                    {appointment.patientName}
                  </h3>

                  <p className="appointment-datetime">
                    📅{" "}
                    {formatAppointmentDate(appointment.date, appointment.time)}
                  </p>

                  <p className="appointment-reason">
                    <strong>Motivo:</strong> {appointment.reason}
                  </p>
                </div>

                <div className="appointment-actions">
                  <Link to={`/appointments/${appointment.id}`}>
                    <Button variant="info">
                      <FiEye />
                      Ver
                    </Button>
                  </Link>

                  <Link to={`/appointments/${appointment.id}/edit`}>
                    <Button variant="warning">
                      <FiEdit2 />
                      Editar
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => onDeleteAppointment(appointment.id)}
                  >
                    <FiTrash2 />
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Appointments;
