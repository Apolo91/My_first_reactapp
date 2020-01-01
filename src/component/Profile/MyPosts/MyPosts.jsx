import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"



const MyPosts = (props) => {

    let Posts = props.state.map(p => <Post message={p.message} like={p.like} />)

    return (
        <div className={s.wrapper_post}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="60" rows="6"></textarea>
                <div><button>Add post</button></div>
            </div>
            {Posts}
         </div>
    );
}


export default MyPosts;  