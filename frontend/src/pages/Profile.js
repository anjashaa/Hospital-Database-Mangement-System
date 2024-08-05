// frontend/src/pages/Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import './Profile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const res = await axios.get(`/api/users/${userId}`);
        setUserDetails(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchAppointments = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const res = await axios.get(`/api/appointments/${userId}`);
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchAppointments();
  }, []);

  return (
    <div>
      <DashboardHeader firstName={userDetails.firstName} loading={loading} setLoading={setLoading} />
      <div className="profile-container">
        <h2>User Profile</h2>
        <div className="card user-details-card">
          <h3>User Details</h3>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="user-details">
              <p><b>First Name:</b> {userDetails.firstName}</p>
              <p><b>Last Name:</b> {userDetails.lastName}</p>
              <p><b>Email:</b> {userDetails.email}</p>
              <p><b>UHID:</b> {userDetails.uhid}</p>
            </div>
          )}
        </div>
        <div className="card appointments-card">
          <h3>Recent Appointments</h3>
          {appointments.length === 0 ? (
            <p>No recent appointments.</p>
          ) : (
            <ul className="appointments-list">
              {appointments.map((appointment) => (
                <li key={appointment._id}>
                  <p><b>Doctor:</b> {appointment.doctorName}</p>
                  <p><b>Date:</b> {appointment.date}</p>
                  <p><b>Time:</b> {appointment.time}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
