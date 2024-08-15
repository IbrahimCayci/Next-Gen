import React from "react";
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/olympic-torch.png"
import search_icon from "../../assets/search.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/profile.png"

const Navbar = ({setSidebar}) => {

    return (
        <nav className="flex-div nav-container">
            <div className="nav-left">
                <img className="menu-icon" onClick={() => setSidebar(prev=>!prev)} src={menu_icon} alt=""/>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                    <span className="brand-text">Next-Gen</span>
                </div>
            </div>

            <div className="nav-middle">
                <div className="search-box">
                    <input type="text" placeholder="Search"/>
                    <img src={search_icon} alt=""/>
                </div>
            </div>

            <div className="nav-right">
                <img src={notification_icon} alt="" />
                <img src={profile_icon} className="user-icon" alt="" />
            </div>
        </nav>
    )
}
export default Navbar