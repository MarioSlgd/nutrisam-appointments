import Button from "../components/Button";
import Input from "../components/Input";
// Página de inicio de la aplicación
// Aquí normalmente se presenta el producto
// o se dirige al usuario a la sección principal
const Home = () => {
  const handleClick = () => {
    alert("Botón funcionando correctamente");
  };

  return (
    <div>
      <h1>Nutrisam Appointments</h1>
      <Input label="nombre del paciente" />
      <Input label="Fecha" type="date" />

      <Button onClick={handleClick}>Probar Boton</Button>

      <p>Gestión de citas nutricionales</p>
    </div>
  );
};

export default Home;
