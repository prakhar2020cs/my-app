
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

function UserAvailability() {
  const [availability, setAvailability] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/availability`);
        setAvailability(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch availability');
        setLoading(false);
      }
    };
    fetchAvailability();
  }, []);

  // Function to submit availability to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAvailability = {
      date: selectedDate,
      startTime,
      endTime,
    };

    try {
      await axios.post(`${API_BASE_URL}/availability`, newAvailability);
      toast.success('Availability added successfully');
      setAvailability([...availability, newAvailability]);
      setStartTime('');
      setEndTime('');
    } catch (error) {
      toast.error('Failed to add availability');
    }
  };

  return (
    <div className="availability-container">
      <h2>Manage Your Availability</h2>

    
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) =>
          view === 'month' && (
            <div>
              {availability.some(
                (avail) => new Date(avail.date).toDateString() === date.toDateString()
              )
                ? 'Available'
                : 'Unavailable'}
            </div>
          )
        }
      />

      {/* Form to add availability */}
      <form onSubmit={handleSubmit} className="availability-form">
        <label htmlFor="startTime">Start Time</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <label htmlFor="endTime">End Time</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <button type="submit" className="btn-submit">Add Availability</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* List of user's availability */}
      <div className="availability-list">
        <h3>Your Availability</h3>
        {availability.map((avail, index) => (
          <div key={index} className="availability-item">
            <p>
              {new Date(avail.date).toDateString()} - {avail.startTime} to {avail.endTime}
            </p>
          </div>
        ))}
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default UserAvailability;