import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './DashboardHeader.css';

const DashboardHeader = ({ firstName, loading, setLoading }) => {
  const navigate = useNavigate();

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
    <header className="dashboard-header">
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="user-info">
        <Link to="/dashboard" className="user-link">
          <FontAwesomeIcon icon={faUser} />
          <span className="user-name">{firstName}</span>
        </Link>
      </div>
      <button className="logout-button" onClick={handleLogout} disabled={loading}>
        Logout
      </button>
    </header>
  );
};

export default DashboardHeader;