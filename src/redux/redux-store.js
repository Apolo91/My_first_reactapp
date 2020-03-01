import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from './navbar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavbarPage: navbarReducer,
    UsersPage: usersReducer,
    auth:authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;