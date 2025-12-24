// Este archivo simula una capa de datos.
// Más adelante aquí mismo haremos llamadas a una API real.

// Función para crear una nueva cita
export const createAppointment = (patientName, date) => {
  return {
    id: Date.now(),
    patientName,
    date,
  };
};
