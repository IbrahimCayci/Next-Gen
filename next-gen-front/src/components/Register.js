import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the Axios instance
import '../App.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('MENTEE'); // Default value set to 'mentee'
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/auth/register', {
        firstName,
        lastName,
        username,
        password,
        role, 
      });
      console.log('Registration successful', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
      <div className="main-container">

        <div className="header">
          <h1>Next-Gen</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>

    <div className="container">
      <h2 className='header'>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="input-container">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
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
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Role</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            className="styled-dropdown"
          >
            <option value="MENTOR">MENTOR</option>
            <option value="MENTEE">MENTEE</option>
          </select>

        </div>
        <button type="submit">Register</button>
      </form>
    </div>

    </div>
  );
};

export default Register;
