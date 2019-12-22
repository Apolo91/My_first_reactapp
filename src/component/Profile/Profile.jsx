import React from 'react';
import s from "./Profile.module.css";
import MyPosts  from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div className={s.profile}>
        <img src="https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80" alt="" />  
        <div className={s.ava}>
         ava + description   
        </div>
        <MyPosts />   
        </div> 
            
    );
}


export default Profile;  