import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import "./home.css";

const Home = ({ appointments = [] }) => {
  return (
    <Layout>
      <div className="dashboard">
        {/* Header */}
        <div className="dashboard__header">
          <h1 className="dashboard__title">Dashboard</h1>

          <Link to="/appointments/new">
            <Button>+ Nueva cita</Button>
          </Link>
        </div>

        {/* Estadísticas */}
        <div className="dashboard__stats">
          <div className="dashboard__card">
            <span className="dashboard__card-title">Total de citas</span>
            <span className="dashboard__card-value">{appointments.length}</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="dashboard__actions">
          <Link to="/appointments">
            <Button>Ver citas</Button>
          </Link>

          <Link to="/appointments/new">
            <Button>Crear cita</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
