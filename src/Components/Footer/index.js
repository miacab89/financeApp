import React from 'react'; 
import Positions from '../Positions/index.js'; 
import Bids from '../Bids/index.js';
import './style.css'; 

const Footer = () => {
    return(
        <div>
            <footer>
                <div className="positions-btn">
                    <Positions />
                </div>
                <div className="bids-btn">
                    <Bids />
                </div>
                <div className="trademark">
                    <h1>Trident Financials, LLC &trade;</h1>
                </div>
            </footer>
        </div>
    )

}


export default Footer; 
