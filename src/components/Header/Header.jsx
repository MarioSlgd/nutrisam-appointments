import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__branding">
        <img src="/Logo-Nutrisam.png" alt="Nutrisam logo" />
        <span className="header__title">Nutrisam</span>
      </div>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/appointments"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Citas
        </NavLink>

        <NavLink
          to="/appointments/new"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Nueva cita
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
