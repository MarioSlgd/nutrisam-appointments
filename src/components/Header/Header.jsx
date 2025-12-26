import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__branding">
        <img src="/Logo-Nutrisam.jpg" alt="Nutrisam logo" />
        <span className="header__title">Nutrisam</span>
      </div>

      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/appointments">Citas</Link>
        <Link to="/appointments/new">Nueva cita</Link>
      </nav>
    </header>
  );
};

export default Header;
