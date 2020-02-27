import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        post: state.ProfilePage.PostData,
        newPostText: state.ProfilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps,{updateNewPostText,addPost})(MyPosts);



export default MyPostsContainer;  