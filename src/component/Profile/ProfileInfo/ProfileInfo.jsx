import React from 'react';
import s from "./ProfileInfo.module.scss";
import CircularIndeterminate from '../../common/preloader/CircularIndeterminate';

const ProfileInfo = (props) => {

    if (!props.profile){
        return <CircularIndeterminate/>
    }
    let avatar = props.profile.photos.small
    if (!avatar){
        avatar = "https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg"
    }
    return (
        <div className={s.profile}>
            <img src="https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80" alt="" />
            <div className={s.ava}>
                
            <div>{props.profile.fullName}</div>
            <img src={avatar}/>
            <div>{props.profile.aboutMe}</div>  
        </div>

        </div>

    );
}


export default ProfileInfo;  