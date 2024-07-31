import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the Axios instance
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        username,
        password,
      });
      console.log('Login successful', response.data);
      // Handle successful login (e.g., store user data, redirect to dashboard)
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="container">
      <h2 className='header'>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
