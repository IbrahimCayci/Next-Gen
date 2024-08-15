import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from '../axiosConfig'; // Import the Axios instance
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful', data);
      // Handle successful login (e.g., store user data, redirect to dashboard)
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home")
  }

  return (
    <div className="main-container">

    <div className="header">
      <h1>Next-Gen</h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>

    <div className="container">
      <h2 className='header'>Login</h2>
      <form /*onSubmit={handleSubmit}*/>
        {error && <div className="error">{error}</div>}
        <div className="input-container">
          <label>Username</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={goToHome}>Login</button>
      </form>
    </div>

    </div>
  );
};

export default Login;

