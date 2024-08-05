import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import ToastNotification from '../components/ToastNotification';
import './ResetPassword.css'; // New CSS file for reset password page

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const { firstName, lastName, email, newPassword, confirmNewPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = { firstName, lastName, email, newPassword };

      const res = await axios.post('/api/users/reset-password', body, config);
      setSuccess('Password updated successfully');
      setShowToast(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Error resetting password');
    }
  };

  return (
    <div>
      <Header />
      <div className="reset-password-container">
        <h2 className="text-center">RESET PASSWORD</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form className="needs-validation" noValidate onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide your first name.</div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide your last name.</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={onChange}
              placeholder="New Password"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide a new password.</div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={onChange}
              placeholder="Confirm New Password"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please confirm your new password.</div>
          </div>
          <button type="submit" className="btn btn-success w-100">Reset Password</button>
        </form>
      </div>
      <Footer />
      <ToastNotification show={showToast} onClose={() => setShowToast(false)} message={success} />
    </div>
  );
};

export default ResetPassword;
