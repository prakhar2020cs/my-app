import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing page components
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import UserAvailability from './pages/UserAvailability';
// import Header from './components/Header';

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header component (shared across all routes) */}
        {/* <Header /> */}

        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/availability" element={<UserAvailability />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;