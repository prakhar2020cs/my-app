import React from 'react';
import { fetchAvailability } from '../services/api';

const Calendar = () => {
  const [availability, setAvailability] = React.useState([]);

  React.useEffect(() => {
    fetchAvailability()
      .then(data => setAvailability(data))
      .catch(error => console.error('Error fetching availability:', error));
  }, []);

  return (
    <div>
      <h2>Your Availability</h2>
      {/* Basic representation of availability */}
      {availability.map((slot, index) => (
        <div key={index}>
          {new Date(slot.startTime).toLocaleString()} - {new Date(slot.endTime).toLocaleString()}
        </div>
      ))}
    </div>
  );
};

export default Calendar;