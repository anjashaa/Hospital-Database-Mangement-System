import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = { email, password };

      const res = await axios.post('/api/users/login', body, config);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('firstName', res.data.firstName);
      localStorage.setItem('userId', res.data.userId); // Store userId in localStorage

      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Error logging in');
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>LOGIN</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="login-form needs-validation" noValidate onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">👤</span>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Stay signed in</label>
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <div className="forgot-password mt-3">
          <p>
            Forget your Password? No worries, <Link to="/reset-password">click here</Link> to reset your password.
          </p>
          <p>
            For Admin Login <Link to="/admin-login">click here</Link>.
          </p>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;