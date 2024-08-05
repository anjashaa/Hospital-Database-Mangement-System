// frontend/src/pages/Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import ToastNotification from '../components/ToastNotification';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    uhid: '',
  });
  const [error, setError] = useState('');
  const [termsError, setTermsError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [validated, setValidated] = useState(false);

  const { firstName, lastName, email, password, confirmPassword, uhid } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onTermsChange = (e) => {
    setTermsChecked(e.target.checked);
    setTermsError(!e.target.checked);
  };

  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false || !termsChecked) {
      e.preventDefault();
      e.stopPropagation();
      if (!termsChecked) {
        setTermsError(true);
      }
      setValidated(true);
    } else {
      e.preventDefault();
      setError(''); // Clear previous errors

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const newUser = {
        firstName,
        lastName,
        email,
        password,
        uhid,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);

        console.log('Registering user with data:', body); // Add this log

        const res = await axios.post('/api/users/register', body, config);
        console.log('User registered successfully:', res.data); // Add this log
        setToastMessage('User registered successfully');
        setShowToast(true);
      } catch (err) {
        console.error('Error registering user:', err.response?.data); // Add this log
        if (err.response?.data?.msg === 'User already exists') {
          setToastMessage('User already exists');
        } else {
          setToastMessage('Error registering user');
        }
        setShowToast(true);
      }

      setValidated(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <form className={`register-form needs-validation ${validated ? 'was-validated' : ''}`} onSubmit={onSubmit} noValidate>
          <h2>Register a new account</h2>
          <p>
            Already Signed Up? Click <Link to="/login">Sign In</Link> to login your account.
          </p>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label htmlFor="firstName"><b>First Name</b></label>
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
            <div className="invalid-feedback">Please provide a first name.</div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName"><b>Last Name</b></label>
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
            <div className="invalid-feedback">Please provide a last name.</div>
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Email Address *</b></label>
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
            <label htmlFor="password"><b>Password *</b></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"><b>Confirm Password *</b></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Confirm Password"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please confirm your password.</div>
          </div>
          <div className="form-group">
            <label htmlFor="uhid"><b>UHID *</b></label>
            <input
              type="text"
              id="uhid"
              name="uhid"
              value={uhid}
              onChange={onChange}
              placeholder="UHID"
              required
              className="form-control"
            />
            <div className="invalid-feedback">Please provide a UHID.</div>
          </div>
          <div className={`form-check terms-conditions ${termsError ? 'is-invalid' : ''}`}>
            <input type="checkbox" id="terms" checked={termsChecked} onChange={onTermsChange} required className="form-check-input" />
            <label htmlFor="terms" className="form-check-label">I read <Link to="/terms">Terms and Conditions</Link></label>
            {termsError && <div className="terms-error">Please agree to the terms and conditions</div>}
          </div>
          <button type="submit" className="btn btn-success register-button">Register</button>
        </form>
      </div>
      <Footer />
      <ToastNotification show={showToast} onClose={() => setShowToast(false)} message={toastMessage} />
    </div>
  );
};

export default Register;
