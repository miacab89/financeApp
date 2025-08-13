import React from 'react';
import Ticker from './Components/Ticker/index.js';
import Graph from './Components/Graph/index.js';
// import Trident from './trident.png';
import Footer from './Components/Footer/index.js';
import Search from './Components/Search/index.js';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() { 

  return(
    <div>
      {/* <img height={200} width={200} src={Trident} className="tridentlogo" alt="tridentlogo" /> */}
      <center><h1>Trident Stock Trading App</h1></center>
      <div className="search-container">
        <Search />
      </div> 
      <div className="ticker-container">
        <Ticker />
      </div> 
      <div className="graph-contrainer">
        <Graph />
      </div>  
      <div className="footer">
        <Footer />
      </div>
    </div>
   
  )
}



