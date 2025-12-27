import "./Input.css";

// Input reutilizable para formularios
const Input = ({ label, type = "text", value, onChange, error, id }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={error ? "input--error" : ""}
      />

      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
