// SchedulePage.tsx

import React, { useState } from 'react';
import './SchedulePage.css';

interface Event {
  id: number;
  date: string;
  time: string;
  game: string;
  teams: string[];
}

const SchedulePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      date: '2024-04-15',
      time: '18:00',
      game: 'Call of Duty: Warzone',
      teams: ['Team A', 'Team B'],
    },
    {
      id: 2,
      date: '2024-04-17',
      time: '20:00',
      game: 'Fortnite',
      teams: ['Team X', 'Team Y'],
    },
    // Add more events as needed
  ];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleApply = () => {
    if (selectedEvent) {
      console.log(`Applied for the tournament: ${selectedEvent.game} on ${selectedEvent.date} at ${selectedEvent.time}`);
    }
  };

  return (
    <div>
      <main className="main-content">
        <h1 className="page-title">Upcoming Events Schedule</h1>

        <section className="schedule-section">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-card ${selectedEvent === event ? 'selected' : ''}`}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
                <p className="event-game">{event.game}</p>
              </div>
              <div className="teams-list">
                <p className="teams-label">Teams:</p>
                <ul>
                  {event.teams.map((team, index) => (
                    <li key={index}>{team}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <div className="apply-button">
          <button onClick={handleApply} disabled={!selectedEvent}>
            Apply for Selected Tournament
          </button>
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;
