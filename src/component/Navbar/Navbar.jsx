import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/Profile">Profile</NavLink></li>
                <li><NavLink to="/Dialogs">Messages</NavLink></li>
                <li><NavLink to="/News">News</NavLink></li>
                <li><NavLink to="/Music">Music</NavLink></li>
                <li><NavLink to="/Settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}


export default Navbar;  