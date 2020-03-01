import React from 'react';
import s from "./header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://st2.depositphotos.com/5904380/12124/v/950/depositphotos_121244762-stock-illustration-logo-industry-factory.jpg" alt="" />
            Welcome
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    );
}


export default Header;  