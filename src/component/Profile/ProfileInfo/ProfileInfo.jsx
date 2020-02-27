import React from 'react';
import s from "./ProfileInfo.module.scss";
import CircularIndeterminate from '../../common/preloader/CircularIndeterminate';

const ProfileInfo = (props) => {

    if (!props.profile){
        return <CircularIndeterminate/>
    }

    return (
        <div className={s.profile}>
            <img src="https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80" alt="" />
            <div className={s.ava}>
                <img src={props.profile.photos.large}/>
                <div>ava + description</div>  
        </div>

        </div>

    );
}


export default ProfileInfo;  