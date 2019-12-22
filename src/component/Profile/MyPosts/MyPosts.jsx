import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {
    return (
        <div className={s.wrapper_post}>
            My posts
            <div >
             <textarea name="" id="" cols="60" rows="5"></textarea> 
             <button>Add post</button>  
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>         
    );
}


export default MyPosts;  