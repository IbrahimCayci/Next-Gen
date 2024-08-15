import React, {useState} from "react";
import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";

const Home = ({sidebar, setSidebar}) => {

    return(
        <div className="home-container">
            <Navbar setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>

            <div className={`inner-container ${sidebar?"":"large-container"}`}>
                <Feed/>
            </div>
        </div>
    );
 }
 export default Home