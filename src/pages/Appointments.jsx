import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// Página que lista las citas
// ❗ NO tiene estado propio
const Appointments = ({ appointments, onDeleteAppointment }) => {
  return (
    <div>
      <Layout>
        <h2>Mis citas</h2>
        <Link to="/appointments/new">Crear nueva cita</Link>
        {appointments.length === 0 ? (
          <p>No hay citas registradas</p>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                {appointment.patientName} — {appointment.date}{" "}
                <Link to={`/appointments/${appointment.id}/edit`}>Editar</Link>
                <button onClick={() => onDeleteAppointment(appointment.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </Layout>
    </div>
  );
};

export default Appointments;
