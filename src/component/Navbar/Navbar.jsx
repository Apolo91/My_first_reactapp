import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
// import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>

            </ul>
            {/* <Friends state={props.state.Friends}/> */}
        </nav>

    );
}


export default Navbar;  