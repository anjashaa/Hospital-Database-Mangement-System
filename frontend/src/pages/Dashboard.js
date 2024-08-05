import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      const userId = localStorage.getItem('userId');
      setFirstName(localStorage.getItem('firstName'));
      try {
        const res = await axios.get(`http://localhost:5001/api/appointments/${userId}`);
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

  return (
    <div>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <DashboardHeader firstName={firstName} loading={loading} setLoading={setLoading} />
      <div className="dashboard-content">
        <div className="dashboard-widgets">
          <Link to="/profile" className="widget widget-user">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <p>User Profile</p>
          </Link>
          <Link to="/doctorList" className="widget widget-doctors">
            <FontAwesomeIcon icon={faUserMd} size="2x" />
            <p>Doctors</p>
          </Link>
          <Link to="/book-appointment" className="widget widget-appointment">
            <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
            <p>Book Appointment</p>
          </Link>
        </div>
        <div className="calendar-container">
          <br></br>
          <br></br>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;