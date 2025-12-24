import "./Button.css";

// Button es un componente reutilizable.
// Usamos children para permitir cualquier contenido dentro del botón.
const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export default Button;
