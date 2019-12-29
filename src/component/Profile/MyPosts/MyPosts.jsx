import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"



const MyPosts = (props) => {
    let PostData = [
        { id: 1, message: 'Hi,how are you?', like:15 },
        { id: 2, message: 'It\'s my first post', like:35 },
        { id: 3, message: 'It\'s my first post', like:35 },
        { id: 4, message: 'It\'s my first post', like:35 },
        { id: 5, message: 'It\'s my first post', like:35 },
   
    ]

    let Posts = PostData.map(p => <Post message={p.message} like={p.like} />)

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