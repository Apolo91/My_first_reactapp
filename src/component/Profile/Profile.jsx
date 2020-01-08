import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts 
            post={props.ProfilePage.PostData} 
            newPostText={props.ProfilePage.newPostText}
            updatePostText={props.updatePostText}
            addPost={props.addPost} />
        </div>

    );
}


export default Profile;  