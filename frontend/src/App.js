import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Terms from './pages/Terms';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Doctors from './pages/Doctors';
import DoctorList from './pages/DoctorList';
import BookAppointment from './pages/BookAppointment';
import Profile from './pages/Profile';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ChatBot from './components/ChatBot';
import Notification from './components/Notification';
import './App.css';

function App() {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Show notification for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {showNotification && <Notification message="Hi! I am CCL BOT. How can I help you today?" duration={3000} />}
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;