import React from 'react';
import './App.scss';
import HeaderContainer from './component/Header/headerContainer';
import Navbar from './component/Navbar/Navbar';
import Music from './component/Music/Music';
import News from './component/News/News';
import Settings from './component/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/Dialogs-container';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import Login from './component/Login/Login';


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar  />
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={()=> <ProfileContainer /> } />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/music' render={() => <Music/>} />
                    <Route path='/news' render={() => <News/>} />
                    <Route path='/users' render={() => <UsersContainer/>} />
                    <Route path='/settings' render={() =><Settings/>} />
                    <Route path='/login' render={() =><Login/>} />

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


// state={props.state.NavbarPage} 