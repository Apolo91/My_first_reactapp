import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://toptos.com.ua/content/images/5/populyarnyy-popsoket-pop-socket-dlya-parnya-dart-veyder-56860954500598_small11.jpg" alt="" />
            Post 1
        <div><span>Like</span></div>
        </div>
    );
}


export default Post;  