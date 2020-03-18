import React from 'react';
import s from "./ProfileInfo.module.scss";
import CircularIndeterminate from '../../common/preloader/CircularIndeterminate';
import ProfileStatus from "./ProfileStatus"



const ProfileInfo = (props) => {

    if (!props.profile){
        return <CircularIndeterminate/>
    }
    let avatar = props.profile.photos.small
    return (
        <div className={s.ava}>
             
            <div>{props.profile.fullName}</div>
            <img src={avatar}/>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.aboutMe}</div>  
       

        </div>

    );
}


export default ProfileInfo;  