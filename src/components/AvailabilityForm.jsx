

import React, { useState } from 'react';
import { createAvailability } from '../services/api';

const AvailabilityForm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    const availability = { startTime, endTime, duration };
    createAvailability(availability)
      .then(response => {
        alert('Availability created successfully!');
        setStartTime('');
        setEndTime('');
        setDuration(30);
      })
      .catch(error => console.error('Error creating availability:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Time:
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </label>
      <label>
        End Time:
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </label>
      <label>
        Duration (minutes):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min="1" required />
      </label>
      <button type="submit">Add Availability</button>
    </form>
  );
};

export default AvailabilityForm;