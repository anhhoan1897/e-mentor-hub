import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import * as BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import events from "./events";
import SidebarAccount from "../sidebarAccount/sidebarAccount";

let allViews = Object.keys(Views).map(k => Views[k]);

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
BigCalendar.momentLocalizer(moment);
// const localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
React.cloneElement(React.Children.only(children), {
  style: {
    backgroundColor: 'lightblue',
  },
})

export default function BasicCalendar({ localizer }) {
  return (
    <div id="page" className="site hfeed">
      <div id="content" className="site-content">
        <section className="section account_page">
          <div className="container">
            <div className="row">
              <SidebarAccount/>
              <div className="col-lg-9 col-12">
                <Calendar
                  events={events}
                  views={allViews}
                  step={60}
                  showMultiDayTimes
                  defaultDate={new Date(2022, 1, 1)}
                  components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                  }}
                  localizer={localizer}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}