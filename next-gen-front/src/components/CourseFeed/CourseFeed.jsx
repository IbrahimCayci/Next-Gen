import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./CourseFeed.css";

const CourseFeed = ({ sidebar, setSidebar }) => {
    const [courses, setCourses] = useState([]);
    const token = localStorage.getItem('token'); // Retrieve the JWT token from local storage

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/courses/all', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include the JWT token in the request headers
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                } else {
                    console.error('Failed to fetch courses');
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        };

        fetchCourses();
    }, [token]); // Re-run the effect if the token changes

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    };

    return (
        <div className="course-feed-container">
            <Navbar setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} />
            <div className={`course-feed ${sidebar ? "" : "large-course-feed"}`}>
                <h2>Available Courses</h2>
                <div className="course-list">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img
                                src={`data:image/jpeg;base64,${arrayBufferToBase64(course.thumbnail)}`}
                                alt="Thumbnail"
                                className="course-thumbnail"
                            />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <video
                                src={`data:video/mp4;base64,${arrayBufferToBase64(course.introVideo)}`}
                                controls
                                className="course-intro-video"
                            />
                            <p>
                                <strong>Price:</strong> ${course.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseFeed;
