---
title: "Calendar"
permalink: /calendar/
author_profile: true
---



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Calendar</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px; /* Add margin to the body */
    }

    .calendar-container {
      max-width: 800px; /* Set a maximum width for the calendar container */
      margin: 0 auto; /* Center the calendar container */
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 24px; /* Adjusted padding for larger boxes */
      text-align: left;
      font-size: 16px;
      position: relative;
    }

    th {
      background-color: #f2f2f2;
    }

    td:hover {
      background-color: #e6e6e6;
      cursor: pointer;
    }

    .event-indicator {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 14px;
      color: #888;
    }

    .modal {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 18px;
      cursor: pointer;
    }

    #eventList {
      margin-top: 20px;
    }
  </style>
</head>
<body>

<div class="calendar-container">
  <h1 id="CalenderDescription">Event Calendar</h1>

  <table id="calendar">
    <thead>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <div id="myModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <h3 id="modalDate"></h3>
    <ul id="eventList"></ul>
  </div>
</div>

<script>
  const calendarBody = document.querySelector('#calendar tbody');
  const modal = document.getElementById('myModal');
  const modalDate = document.getElementById('modalDate');
  const eventList = document.getElementById('eventList');

  // Hardcoded events for specific dates
  const events = {
    '2023-11-15': ['Event 1', 'Event 2'],
    '2023-11-20': ['Event 3'],
    // Add more events as needed...
  };

  function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    calendarBody.innerHTML = '';

    let date = 1;
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < firstDay.getDay()) {
          // Empty cells before the first day of the month
          cell.textContent = '';
        } else if (date > lastDay.getDate()) {
          // Empty cells after the last day of the month
          cell.textContent = '';
        } else {
          cell.textContent = date;
          const currentDate = `${year}-${month + 1}-${date}`;
          if (events[currentDate]) {
            const eventIndicator = document.createElement('div');
            eventIndicator.classList.add('event-indicator');
            eventIndicator.textContent = `(${events[currentDate].length})`;
            cell.appendChild(eventIndicator);
            cell.addEventListener('click', () => openModal(date, month, year, events[currentDate]));
          }
          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }

  function openModal(day, month, year, dayEvents) {
    modal.style.display = 'block';
    modalDate.textContent = `Events on ${month + 1}/${day}/${year}`;
    eventList.innerHTML = ''; // Clear previous events
    // Display the events for the selected date
    dayEvents.forEach(event => {
      const eventItem = document.createElement('li');
      eventItem.textContent = event;
      eventList.appendChild(eventItem);
    });
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  // Initial rendering of the calendar for the current month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  generateCalendar(currentYear, currentMonth);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  document.getElementById("CalenderDescription").innerHTML = monthNames[currentMonth] + " " + currentYear;
</script>

</body>
</html>
