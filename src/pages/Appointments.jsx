import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

import "./appointments.css";
import "./form.css";

const Appointments = ({ appointments = [], onDeleteAppointment }) => {
  return (
    <Layout>
      <div className="appointments-page">
        <div className="appointments-header">
          <h2>Mis citas</h2>

          <Link to="/appointments/new">
            <Button>+ Nueva cita</Button>
          </Link>
        </div>

        {appointments.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__title">Aún no tienes citas</div>

            <p className="empty-state__text">
              Empieza creando tu primera cita para gestionar tus pacientes de
              forma ordenada.
            </p>

            <Link to="/appointments/new">
              <Button>Crear primera cita</Button>
            </Link>
          </div>
        ) : (
          <div className="appointments-list">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-info">
                  <span className="appointment-name">
                    {appointment.patientName}
                  </span>
                  <span className="appointment-date">{appointment.date}</span>
                </div>

                <div className="appointment-actions">
                  <Link to={`/appointments/${appointment.id}/edit`}>
                    <Button>Editar</Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => {
                      const confirmed = window.confirm(
                        "¿Seguro que deseas eliminar esta cita?"
                      );

                      if (confirmed) {
                        onDeleteAppointment(appointment.id);
                      }
                    }}
                  >
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
