import React from "react";
import "./Sidebar.css"
import forum from "../../assets/forum.png"
import course from "../../assets/course.png"
import career from "../../assets/career.png"
import entrepreneurship from "../../assets/entrepreneurship.png"
import investing from "../../assets/investing.png"
import networking from "../../assets/networking.png"

const Sidebar = ({sidebar}) => {
    return(
        <div className={`sidebar ${sidebar?"":"no-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={forum} alt=""/><p>Forum</p>
                </div>
                <hr/>
            </div>

            <div className="course-list">
                <h3>Courses</h3>
                <div className="side-link">
                    <img src={course} alt=""/><p>Course 1</p>
                </div>
                <div className="side-link">
                    <img src={course} alt=""/><p>Course 2</p>
                </div>
                <div className="side-link">
                    <img src={course} alt=""/><p>Course 3</p>
                </div>
                <hr/>
            </div>

            <div className="category-list">
                <h3>Categories</h3>
                <div className="side-link">
                    <img src={career} alt=""/><p>Career</p>
                </div>
                <div className="side-link">
                    <img src={entrepreneurship} alt=""/><p>Entrepreneurship</p>
                </div>
                <div className="side-link">
                    <img src={investing} alt=""/><p>Investing</p>
                </div>
                <div className="side-link">
                    <img src={networking} alt=""/><p>Networking</p>
                </div>
            </div>
        </div>
    );
}
export default Sidebar