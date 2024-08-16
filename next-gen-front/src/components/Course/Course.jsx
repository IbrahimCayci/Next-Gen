import React from "react";
import "./Course.css"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import PlayVideo from "../PlayVideo/PlayVideo"
import Payment from "../Payment/Payment";

const Course = ({sidebar, setSidebar}) => {
    return(
        <div>
            <Navbar setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <div className={`course-container ${sidebar?"":"course-large-container"}`}>
                <PlayVideo/>
                <Payment/>
            </div>
        </div>
    );
}
export default Course