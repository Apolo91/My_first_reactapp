import React from 'react';
import './App.scss';
import Header from './component/Header/header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import Music from './component/Music/Music';
import News from './component/News/News';
import Settings from './component/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.NavbarPage} />
        <div className="app-wrapper-content">
          <Route path='/Profile' render={()=><Profile 
          ProfilePage={props.state.ProfilePage} 
          dispatch={props.dispatch}/>}
        />
          <Route path='/Dialogs' render={() => <Dialogs store={props.store} />} />
          <Route path='/Music' render={() => <Music/>} />
          <Route path='/News' render={() => <News/>} />
          <Route path='/Settings' render={() =><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
