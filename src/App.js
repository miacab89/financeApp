import React from 'react';
import Ticker from './Components/Ticker/index.js';
import Graph from './Components/Graph/index.js';
import TermButtons from './Components/TermButtons/index.js'
import Trident from './trident.png';
import Modal from './Components/Modal/index.js'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() { 

  return(
    <div>
      <img src={Trident} className="tridentlogo" alt="tridentlogo" />
      <center><h1>Trident Stock Trading App</h1></center>
      <div className="ticker-container">
        <Ticker />
      </div> 
      <div className="buttons-container">
        <div className="bid-button">
        <Modal />
        </div>
        <TermButtons/>
      </div>
      <div className="graph-contrainer">
        <Graph />
      </div>  
    </div>
   
  )
}



