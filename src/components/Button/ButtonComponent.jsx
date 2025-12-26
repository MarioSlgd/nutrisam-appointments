import "./button.css";

// Botón reutilizable para toda la aplicación
const Button = ({ children, type = "button", disabled = false, ...props }) => {
  return (
    <button type={type} className="btn" disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
