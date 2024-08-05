import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientsList from './PatientsList';
import DoctorsList from './DoctorsList';
import Footer from '../components/Footer';
import AppointmentsList from './AppointmentsList';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/appointments');
        const appointmentEvents = res.data.map(appointment => ({
          title: `${appointment.name} - ${appointment.doctorName}`,
          start: `${appointment.date}T${appointment.time}`,
        }));
        setAppointments(appointmentEvents);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAppointments();
  }, []);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminFirstName');
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <header className="dashboard-header">
        <div className="user-info">
          <Link to="/admin-dashboard" className="user-link">
            <FontAwesomeIcon icon={faUser} />
            <span className="user-name">Admin</span>
          </Link>
        </div>
        <button className="logout-button" onClick={handleLogout} disabled={loading}>Logout</button>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-widgets">
          <Link to="/admin-dashboard/patients" className="widget widget-patients">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <p>Patients</p>
          </Link>
          <Link to="/admin-dashboard/doctors" className="widget widget-doctors">
            <FontAwesomeIcon icon={faUserMd} size="2x" />
            <p>Doctors</p>
          </Link>
          <Link to="/admin-dashboard/appointments" className="widget widget-appointment">
            <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
            <p>Appointments</p>
          </Link>
        </div>
        <div className="calendar-container">
          <Routes>
            <Route path="/" element={
              <div className="fullcalendar-wrapper">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                  events={appointments}
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
              </div>
            } />
            <Route path="patients" element={<PatientsList />} />
            <Route path="doctors" element={<DoctorsList />} />
            <Route path="appointments" element={<AppointmentsList />} />
          </Routes>
        </div>
      </div>

      <Footer>
        
      </Footer>
    </div>
  );
};

export default AdminDashboard;