import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import ToastNotification from '../components/ToastNotification';
import './BookAppointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    contact: '',
    doctor: '',
    date: '',
    time: ''
  });
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Fetch userId from localStorage
      const userName = localStorage.getItem('firstName'); // Fetch user name
      setFirstName(userName);
      setFormData(prevData => ({
        ...prevData,
        userId,
        name: userName
      }));
    };

    const fetchDoctors = async () => {
      try {
        const res = await axios.get('/api/doctorList');
        setDoctors(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchDoctors();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      try {
        const res = await axios.post('/api/appointments', formData);
        console.log(res.data);
        setToastMessage('Appointment Booked Successfully');
        setShowToast(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000); // Navigate after toast disappears
      } catch (err) {
        console.error(err);
        setToastMessage('Error booking appointment');
        setShowToast(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      }
    }
    setValidated(true);
  };

  return (
    <div>
      <DashboardHeader firstName={firstName} loading={loading} setLoading={setLoading} />
      <div className="book-appointment-container">
        <form className={`book-appointment-form needs-validation ${validated ? 'was-validated' : ''}`} onSubmit={onSubmit} noValidate>
          <h2>Book Appointment</h2>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input type="text" id="userId" name="userId" value={formData.userId} readOnly className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} readOnly className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={onChange} className="form-control" required />
            <div className="invalid-feedback">Please provide a contact number.</div>
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Doctor</label>
            <select id="doctor" name="doctor" value={formData.doctor} onChange={onChange} className="form-control" required>
              <option value="">Select a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
              ))}
            </select>
            <div className="invalid-feedback">Please select a doctor.</div>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={onChange} className="form-control" required />
            <div className="invalid-feedback">Please provide a date.</div>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={onChange} className="form-control" required />
            <div className="invalid-feedback">Please provide a time.</div>
          </div>
          <button type="submit" className="btn btn-success">Book Appointment</button>
        </form>
      </div>
      <Footer />
      <ToastNotification show={showToast} onClose={() => setShowToast(false)} message={toastMessage} />
    </div>
  );
};

export default BookAppointment;