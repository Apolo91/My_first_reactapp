import React from 'react';
import s from "./Content.module.css";

const Content = (props) => {
    return (
        <div className={s.content}>
        <img src="https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80" alt="" />  
        
        <div className={s.post}>Post1 </div>
        <div className={s.post}>Post2 </div>
        <div className={s.post}>Post3 </div>
        <div className={s.post}>Post4 </div>
        <div className={s.post}>Post5 </div>
        <div className={s.post}>Post6 </div>
        </div>        
    );
}


export default Content;  