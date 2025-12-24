// Link permite navegar entre rutas sin recargar la página
import { Link } from "react-router-dom";

import "./Header.css";

// Header es un componente reutilizable
// Aparecerá en todas las páginas
const Header = () => {
  return (
    <header>
      <nav>
        <h1>Nutrisam</h1>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/appointments">Citas</Link>
          </li>

          <li>
            <Link to="/appointments/new">Nueva cita</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
