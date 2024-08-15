import React from "react";
import "./Course.css"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Course(sidebar, setSidebar) {
    return(
        <div className="home-container">
            <Navbar setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>

        </div>
    );
}
export default Course