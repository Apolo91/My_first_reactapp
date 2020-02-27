import React from 'react';
import './App.scss';
import Header from './component/Header/header';
import Navbar from './component/Navbar/Navbar';
import Music from './component/Music/Music';
import News from './component/News/News';
import Settings from './component/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/Dialogs-container';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/Profile/ProfileContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar  />
        <div className="app-wrapper-content">
          <Route path='/Profile' render={()=> <ProfileContainer /> } />
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Music' render={() => <Music/>} />
          <Route path='/News' render={() => <News/>} />
          <Route path='/Users' render={() => <UsersContainer/>} />
          <Route path='/Settings' render={() =><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// state={props.state.NavbarPage} 