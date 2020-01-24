import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let Posts = props.post.map(p => <Post message={p.message} like={p.like} />)

    let NewPostElement = React.createRef();

    let AddPost = () => {
       
        props.dispatch(addPostActionCreator());
        
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.wrapper_post}>
            <h3>My posts</h3>
            <div>
                <textarea  onChange={onPostChange} ref={NewPostElement} cols="60" rows="6" 
                value={props.newPostText} />
                <div><button onClick={AddPost}>Add post</button></div>
            </div>
            {Posts}
        </div>
    );
}

export default MyPosts;  