import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let Posts = props.post.map(p => <Post message={p.message} like={p.like} />)

    let NewPostElement = React.createRef();

    let onAddPost = () => {

        props.AddPost();

    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.wrapper_post}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} cols="60" rows="6"
                    value={props.newPostText} />
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
            {Posts}
        </div>
    );
}

export default MyPosts;  