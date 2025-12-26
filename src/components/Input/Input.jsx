import "./input.css";

// Input reutilizable para formularios.
// No maneja estado, solo recibe props.
const Input = ({ label, type = "text", value, onChange, id, ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="input-field"
        {...props}
      />
    </div>
  );
};

export default Input;
