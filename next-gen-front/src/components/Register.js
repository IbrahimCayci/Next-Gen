import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the Axios instance
import '../App.css';

const Register = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/register', {
        username,
        password,
      });
      console.log('Registration successful', response.data);
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className='header'>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="input-container">
          <label>First Name</label>
          <input
            type="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input
            type="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      <div></div>
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
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
