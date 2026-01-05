export const formatAppointmentDate = (date, time) => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");

  const dateObj = new Date(year, month - 1, day, hours, minutes);

  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(dateObj);

  const formattedTime = new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(dateObj);

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return `${capitalize(formattedDate)} – ${formattedTime}`;
};

export const getTodayLocalISO = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
