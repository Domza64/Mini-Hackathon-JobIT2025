import { useEffect, useState } from "react";
import { fetchSchedule } from "../api/util";
import { useUserData } from "../hooks/useUserData";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarEvent from "../types/calendarEvent";
import AllEventDisplay from "../components/temporary-test/AllEventDisplay";

// Setup the localizer by providing moment (or globalize) to the correct localizer
const localizer = momentLocalizer(moment);

export default function SchedulePage() {
  const { userData } = useUserData();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  useEffect(() => {
    const getSchedule = async () => {
      const response = await fetchSchedule(userData?.id || -1);

      if (response.schedule) {
        // Transform your schedule data into the format react-big-calendar expects
        console.log(response.schedule);
        const calendarEvents = response.schedule.map(
          (event: CalendarEvent) => ({
            title: event.title,
            type: event.type,
            start: event.start,
            end: event.end,
            canceled: event.canceled,
            allDay: event.allDay,
          })
        );
        setEvents(calendarEvents);
      } else {
        console.log(response.error);
      }
    };

    getSchedule();
  }, []);

  const eventStyleGetter = (event: CalendarEvent) => {
    let backgroundColor = "#3174ad"; // default blue
    if (event.canceled) backgroundColor = "#d63031"; // red for canceled
    if (event.type === "exam") backgroundColor = "#6c5ce7"; // purple for exams
    if (event.type === "lecture") backgroundColor = "#00b894"; // green for lectures

    return {
      style: {
        backgroundColor,
        borderRadius: "4px",
        opacity: event.canceled ? 0.6 : 1,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <main className="flex justify-center items-center w-full flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">My Schedule</h1>
      <div className="w-full h-[80vh] p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={date}
          view={view}
          // @ts-ignore
          onView={setView}
          onNavigate={setDate}
          eventPropGetter={eventStyleGetter}
          defaultView={Views.MONTH}
          toolbar={true}
        />
      </div>
    </main>
  );
}
