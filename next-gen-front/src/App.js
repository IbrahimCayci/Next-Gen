import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
    <Router>
      <div>
        <div class="header">
          <h1>Next-Gen</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
