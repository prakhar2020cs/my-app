import React, { useState } from 'react';
import { createSession } from '../services/api';

const SessionScheduling = () => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [participants, setParticipants] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const session = {
      title,
      startTime,
      endTime,
      participants: participants.split(',').map(email => ({ email })),
    };
    createSession(session)
      .then(response => {
        alert('Session created successfully!');
        setTitle('');
        setStartTime('');
        setEndTime('');
        setParticipants('');
      })
      .catch(error => console.error('Error creating session:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Session Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Start Time:
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </label>
      <label>
        End Time:
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </label>
      <label>
        Participants (comma-separated emails):
        <input type="text" value={participants} onChange={(e) => setParticipants(e.target.value)} required />
      </label>
      <button type="submit">Schedule Session</button>
    </form>
  );
};

export default SessionScheduling;