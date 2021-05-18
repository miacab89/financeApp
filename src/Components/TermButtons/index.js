import React from 'react';
import {Button} from 'react-bootstrap';
import './style.css'; 

function termButtons() {
    
    return(
        <div className="buttons">
            <Button variant="outline-info" className="bull-btn">Bullish</Button>
            <Button variant="outline-info" className="bear-btn">Bearish</Button>
        </div>
    )
}

export default termButtons; 

