import React from 'react';
import s from "./header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://st2.depositphotos.com/5904380/12124/v/950/depositphotos_121244762-stock-illustration-logo-industry-factory.jpg" alt="" />
            Welcome
        </header>
        
    );
}


export default Header;  