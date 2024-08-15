import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home/Home";
import Video from "./components/Course/Course"
import Course from "./components/Course/Course";

function App() {

    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Redirect root to login */}

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home sidebar={sidebar} setSidebar={setSidebar}/>} />
                    <Route path="/video/:categoryId/:courseId" element={<Course sidebar={sidebar} setSidebar={setSidebar}/>} />
                </Routes>
            </Router>
        </>

  );
}

export default App;
