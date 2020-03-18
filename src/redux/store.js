import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from './navbar-reducer';

let store = {
    _state: {
        NavbarPage: {
            Friends: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Anna' },
                { id: 3, name: 'Viktor' },
            ]
        },
        ProfilePage: {
            PostData: [
                { id: 1, message: 'Hi,how are you?', like: 15 },
                { id: 2, message: 'It\'s my first post', like: 33 },
                { id: 3, message: 'It\'s my first post', like: 49 },
                { id: 4, message: 'It\'s my first post', like: 1 },
            ],
            newPostText: "Hi!"
        },
        DialogsPage: {
            DialogsData: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Victor' },
                { id: 3, name: 'Olga' },
                { id: 4, name: 'Anna' },
                { id: 5, name: 'Egor' },
                { id: 6, name: 'Egor' },
            ],
            MessageData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'It\'s fine' },
               
            ],
            newMessageText: ""

        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage,action);
        this._state.NavbarPage = navbarReducer (this._state.NavbarPage,action);
        this._callSubscriber(this._state);
       
    }
}

export default store;
 