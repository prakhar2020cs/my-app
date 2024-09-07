import React from 'react';
import SessionScheduling from '../components/SessionScheduling';

const SessionSchedulingPage = () => {
  return (
    <div>
      <h1>Schedule a New Session</h1>
      <SessionScheduling />  {/* Component to schedule new sessions */}
    </div>
  );
};

export default SessionSchedulingPage;