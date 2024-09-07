import React from 'react';
import AvailabilityForm from '../components/AvailabilityForm';
import Calendar from '../components/Calender';


const Home = () => {
  return (
    <div>
      <h1>Manage Your Availability</h1>
      <section>
        <h2>Add or Update Availability</h2>
        <AvailabilityForm />  
      </section>
      <section>
        <h2>Your Calendar</h2>
        <Calendar /> 
      </section>
    </div>
  );
};

export default Home;