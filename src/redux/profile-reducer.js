import { usersAPI, profileAPI } from '../api/api';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE ';
const SET_STATUS = 'SET_STATUS ';

let initialState = {
    PostData: [
        { id: 1, message: 'Hi,how are you?', like: 15 },
        { id: 2, message: 'It\'s my first post', like: 33 },
        { id: 3, message: 'It\'s my first post', like: 49 },
        { id: 4, message: 'It\'s my first post', like: 1 },
    ],
    newPostText: "Hi!",
    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }    
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });



export const getUserProfile = (userId) => (dispatch) => (
    usersAPI.profileGet(userId)
        .then(response => { dispatch(setUserProfile(response.data)) })
);

export const getStatus = (userId) => (dispatch) => (
    profileAPI.getStatus(userId)
        .then(response => { dispatch(setStatus(response.data)) })
);

export const updateStatus = (status) => (dispatch) => (
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
         })
);





export default profileReducer;