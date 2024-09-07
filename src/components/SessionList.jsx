import React, { useEffect, useState } from 'react';
import { fetchSessions } from '../services/api';

const SessionList = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions()
      .then(data => setSessions(data))
      .catch(error => console.error('Error fetching sessions:', error));
  }, []);

  return (
    <div>
      <h1>Upcoming Sessions</h1>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            {session.title} - {new Date(session.startTime).toLocaleString()} to {new Date(session.endTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;