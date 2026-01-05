// Importamos los componentes principales de React Router
// BrowserRouter maneja el historial del navegador
// Routes agrupa todas las rutas
// Route define cada URL de la app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Header es parte del layout: se mantiene visible en todas las rutas.
import Header from "./components/Header";

// Importamos las páginas principales de la aplicación
// pages/ contiene pantallas completas, no componentes pequeños
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import NewAppointment from "./pages/NewAppointment";
import EditAppointment from "./pages/EditAppointment";
import ViewAppointment from "./pages/ViewAppointment";

//Aqui empeiza app!!!!
function App() {
  //ESTADO GLOBAL DE CITAS
  const [appointments, setAppointments] = useState([]);

  console.log("APPOINTMENTS EN APP:", appointments);

  //crear cita
  const addAppointment = (appointment) => {
    const exists = appointments.some(
      (a) => a.date === appointment.date && a.time === appointment.time
    );

    if (exists) {
      return false; // indica que no se pudo guardar
    }

    setAppointments((prev) => [...prev, appointment]);
    return true; // indica éxito
  };

  //actualizar cita
  const updateAppointment = (updatedAppointment) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === updatedAppointment.id
          ? updatedAppointment
          : appointment
      )
    );
  };

  //eliminar cita
  const deleteAppointment = (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que deseas eliminar esta cita?"
    );

    if (!confirmDelete) return;

    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    // BrowserRouter envuelve toda la app
    // para habilitar navegación por URLs reales (SPA)
    <BrowserRouter>
      {/* Header se mantiene visible en todas las rutas */}
      <Header />

      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home appointments={appointments} />} />

        {/* Lista de citas */}
        <Route
          path="/appointments"
          element={
            <Appointments
              appointments={appointments}
              onDeleteAppointment={deleteAppointment}
            />
          }
        />

        {/* Ver cita */}
        <Route
          path="/appointments/:id"
          element={<ViewAppointment appointments={appointments} />}
        />

        {/* Crear nueva cita */}
        <Route
          path="/appointments/new"
          element={<NewAppointment onAddAppointment={addAppointment} />}
        />

        {/* Editar una cita existente
            :id es un parámetro dinámico que representa el ID de la cita */}
        <Route
          path="/appointments/:id/edit"
          element={
            <EditAppointment
              appointments={appointments}
              onUpdateAppointment={updateAppointment}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
