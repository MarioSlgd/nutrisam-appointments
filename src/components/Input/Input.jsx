import "./Input.css";

// Input reutilizable para formularios.
// NO maneja estado: solo recibe props.
const Input = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
