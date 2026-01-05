import Layout from "../components/Layout";
import Button from "../components/Button";
import Calendar from "../components/Calendar/Calendar";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiClock,
  FiPlus,
  FiChevronRight,
  FiEye,
} from "react-icons/fi";
import { formatAppointmentDate } from "../utils/dateUtils";
import { getTodayLocalISO } from "../utils/dateUtils";

import "./home.css";

const Home = ({ appointments }) => {
  const now = new Date();
  const todayISO = getTodayLocalISO();

  const todaysAppointments = appointments.filter((a) => a.date === todayISO);

  const upcomingAppointments = [...appointments]
    .map((a) => ({
      ...a,
      dateTime: new Date(`${a.date}T${a.time}`),
    }))
    .filter((a) => a.dateTime >= now)
    .sort((a, b) => a.dateTime - b.dateTime)
    .slice(0, 3);

  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Dashboard</h2>

          <Link to="/appointments/new">
            <Button>
              <FiPlus />
              Nueva cita
            </Button>
          </Link>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <FiCalendar className="stat-icon" />
            <span className="stat-value">{appointments.length}</span>
            <span className="stat-label">Citas totales</span>
          </div>

          <div className="stat-card">
            <FiClock className="stat-icon" />
            <span className="stat-value">{todaysAppointments.length}</span>
            <span className="stat-label">Citas hoy</span>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-header">
            <h3>Próximas citas</h3>

            <Link to="/appointments" className="section-link">
              Ver todas <FiChevronRight />
            </Link>
          </div>

          {upcomingAppointments.length === 0 ? (
            <p className="empty-text">No hay citas próximas</p>
          ) : (
            <ul className="upcoming-list">
              {upcomingAppointments.map((a) => (
                <li key={a.id} className="upcoming-item">
                  <div>
                    <strong>{a.patientName}</strong>
                    <span>📅{formatAppointmentDate(a.date, a.time)}</span>
                  </div>

                  <Link to={`/appointments/${a.id}`}>
                    <Button variant="info" size="sm">
                      <FiEye />
                      Ver cita
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dashboard-section">
          <h3>Agenda</h3>
          <Calendar appointments={appointments} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
