import React from 'react';
import './App.css';
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
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Music' component={Music} />
          <Route path='/News' component={News} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
