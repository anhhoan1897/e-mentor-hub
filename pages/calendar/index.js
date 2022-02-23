import React, {useState} from "react";
import { useRouter } from "next/router";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDate from "date-fns/getDate";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactDatePicker from "react-datepicker";
import SidebarAccount from "../../components/sidebarAccount/sidebarAccount";

const locales = {
  "en-US": require ("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDate,
  locales,
})

// const d1 = new Date(2022,5,0).getDay();
// const d2 = new Date(2022,5,0).getDay();

const d1 = "demo";
const d2 = "demo";

const events = [
  {
    title: "Meeting user 1",
    allDay: true,
    start: d1,
    end: d1,
  },
  {
    title: "Meeting user 2",
    start: d2,
    end: d2,
  },
  {
    title: "Meeting user 3",
    start: d2,
    end: d2,
  },
]

export default function CalendarDashboard() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [newEvent, setNewEvent] = useState(
    {
      title: "",
      start: "",
      end: "",
    }
  )

  const [allEvents, setAllEvents] = useState(events)
  
  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div id="page" className="site hfeed">
      <div id="content" className="site-content">
        <section className="section account_page">
          <div className="container">
            <div className="row">
              <SidebarAccount currentRouter={currentRoute} />
              <div className="col-lg-9 col-12">
                <h1>Calendar</h1>
                <h2>Add new Event</h2>
                <input
                  type="text"
                  placeholder="Add title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <ReactDatePicker
                  placeholderText="Start Date"
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <ReactDatePicker
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button onClick={handleAddEvent}>
                  Add Event
                </button>
                {/* <Calendar
                  localizer={localizer}
                  events={allEvents}
                  startAccessor="start"
                  endAccessor="end"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
