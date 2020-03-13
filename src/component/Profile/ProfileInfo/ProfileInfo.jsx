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
        <div className={s.ava}>
             
            <div>{props.profile.fullName}</div>
            <img src={avatar}/>
            <div>{props.profile.aboutMe}</div>  
       

        </div>

    );
}


export default ProfileInfo;  