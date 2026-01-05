import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./calendar.css";

const Calendar = ({ appointments }) => {
  const events = appointments.map((a) => ({
    id: a.id,
    title: a.patientName,
    start: `${a.date}T${a.time}`,
  }));

  return (
    <div className="calendar-wrapper">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        slotMinTime="10:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        nowIndicator={true}
        height="auto"
        locale="es"
      />
    </div>
  );
};

export default Calendar;
