import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import './DoctorList.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/doctorList');
        console.log('Fetched Doctors:', res.data);
        setDoctors(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctors();
  }, []);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('firstName');
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
          <Link to="/dashboard" className="user-link">
            <FontAwesomeIcon icon={faUser} />
            <span className="user-name">{firstName}</span>
          </Link>
        </div>
        <button className="logout-button" onClick={handleLogout} disabled={loading}>Logout</button>
      </header>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title green-title mb-4">Doctors</h2>
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Speciality</th>
                  <th scope="col">Available Times</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor._id}>
                    <td>{index + 1}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.speciality}</td>
                    <td>
                      {doctor.availableTimes.map((time, idx) => (
                        <div key={idx}>
                          {time.date} at {time.time}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorList;