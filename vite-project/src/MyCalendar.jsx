// src/MyCalendar.tsx

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { format, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Configure the localizer
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Team',
      start: new Date(2024, 9, 16, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2024, 9, 16, 11, 0),
      allDay: false,
    },
    {
      title: 'Lunch with Client',
      start: new Date(2024, 9, 17, 12, 0),
      end: new Date(2024, 9, 17, 13, 0),
      allDay: false,
    },
  ]);

  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}`);
  };

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        defaultView="week"
        selectable
      />
    </div>
  );
};

export default MyCalendar;
