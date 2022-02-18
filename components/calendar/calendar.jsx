import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from "./events";
import SidebarAccount from "../sidebarAccount/sidebarAccount";

let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
React.cloneElement(React.Children.only(children), {
  style: {
    backgroundColor: 'lightblue',
  },
})

// moment.tz.setDefault('Vietnamese/HaNoi')

const localizer = momentLocalizer(moment);

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
              <input
                  id="update_view_more_text_hidden"
                  name="update_view_more_text_hidden"
                  className="update_view_more_text_hidden"
                  type="hidden" value="Thu gọn" />
              <input
                  id="update_less_more_text_hidden"
                  name="update_less_more_text_hidden"
                  className="update_less_more_text_hidden"
                  type="hidden"
                  value="Xem thêm" />
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
              <script src="https://ementorhub.com/wp-content/themes/canhcam/assets/js/jquery.ajaxSP.upload.js"></script>
          </div>
      </div>
  );
}