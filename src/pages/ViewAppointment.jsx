import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import {
  FiEdit2,
  FiTrash2,
  FiArrowLeft,
  FiUser,
  FiCalendar,
  FiClock,
  FiFileText,
  FiHash,
  FiPhone,
  FiUsers,
} from "react-icons/fi";

import "./viewappointment.css";

const ViewAppointment = ({ appointments }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const appointment = appointments.find((a) => a.id === Number(id));

  if (!appointment) {
    navigate("/appointments");
    return null;
  }

  return (
    <Layout>
      <div className="view-page">
        <div className="view-card">
          <h2 className="view-title">Detalle de la cita</h2>

          <div className="view-list">
            <div className="view-item">
              <FiUser className="view-icon" />
              <span className="view-label">Paciente</span>
              <span className="view-value">{appointment.patientName}</span>
            </div>

            <div className="view-item">
              <FiCalendar className="view-icon" />
              <span className="view-label">Fecha</span>
              <span className="view-value">{appointment.date}</span>
            </div>

            <div className="view-item">
              <FiClock className="view-icon" />
              <span className="view-label">Hora</span>
              <span className="view-value">{appointment.time}</span>
            </div>

            <div className="view-item">
              <FiFileText className="view-icon" />
              <span className="view-label">Motivo</span>
              <span className="view-value">{appointment.reason}</span>
            </div>

            <div className="view-item">
              <FiHash className="view-icon" />
              <span className="view-label">Edad</span>
              <span className="view-value">{appointment.age}</span>
            </div>

            <div className="view-item">
              <FiPhone className="view-icon" />
              <span className="view-label">Teléfono</span>
              <span className="view-value">{appointment.phone}</span>
            </div>

            <div className="view-item">
              <FiUsers className="view-icon" />
              <span className="view-label">Sexo</span>
              <span className="view-value">{appointment.sex}</span>
            </div>
          </div>

          <div className="view-actions">
            <Button
              variant="secondary"
              onClick={() => navigate("/appointments")}
            >
              <FiArrowLeft size={16} />
              Volver
            </Button>

            <Button
              variant="warning"
              onClick={() => navigate(`/appointments/${appointment.id}/edit`)}
            >
              <FiEdit2 size={16} />
              Editar
            </Button>

            <Button variant="danger">
              <FiTrash2 size={16} />
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAppointment;
