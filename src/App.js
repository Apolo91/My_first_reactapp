import React from 'react';
import './App.css';
import Header from './component/Header/header';
import Navbar from  './component/Navbar/Navbar';
import Profile from './component/Profile/Profile'


const App = (props) => {
  return (
    <div className="app-wrapper">
    <Header />
    <Navbar />
    <Profile />
    </div>
  );
}

export default App;