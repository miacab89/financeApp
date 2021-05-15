import React from 'react';
import Ticker from './Components/Ticker/index.js';
import Profile from './Components/Profile/index.js';
import Trident from './trident.png';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() { 

  return(
    <div>
      <img src={Trident} className="tridentlogo" alt="tridentlogo" />
      <center><h1>Trident Stock Trading App</h1></center>
      <div className="container">
        <Profile />
        <Ticker />
      </div>
    </div>
  )
}



