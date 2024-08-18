import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./CourseFeed.css";

const CourseFeed = ({ sidebar, setSidebar }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses/all');
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
    }, []);

    return (
        <div className="course-feed-container">
            <Navbar setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} />
            <div className={`course-feed ${sidebar ? "" : "large-course-feed"}`}>
                <h2>Available Courses</h2>
                <div className="course-list">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <img
                                src={`data:image/jpeg;base64,${btoa(
                                    new Uint8Array(course.thumbnail).reduce((data, byte) => data + String.fromCharCode(byte), '')
                                )}`}
                                alt="Thumbnail"
                                className="course-thumbnail"
                            />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <video
                                src={`data:video/mp4;base64,${btoa(
                                    new Uint8Array(course.introVideo).reduce((data, byte) => data + String.fromCharCode(byte), '')
                                )}`}
                                controls
                                className="course-intro-video"
                            />
                            <p><strong>Price:</strong> ${course.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseFeed;