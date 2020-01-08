import React from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend'

const Friends = (props) => {
    let countFriends = props.state.map(p => <Friend name={p.name} />)
    return (
        <div className={s.friends}>
            
        Friends            

        <div className={s.friends_wrap} >
            
            {countFriends}
        </div>
        </div>
    );
}


export default Friends;  