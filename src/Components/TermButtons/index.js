import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import './style.css'; 

function TermButtons() {

  const inputEl = useRef(null);
  const onButtonClick = () => {
    
    // `current` points to the mounted text input element


    inputEl.current.focus();
  }; 
    return(
        <div className="buttons">
            <Button onClick={onButtonClick} variant="outline-primary" className="bull-btn">Bullish</Button>
            <Button onClick={onButtonClick} variant="outline-secondary" className="bear-btn">Bearish</Button>
        </div>
    )
}

export default TermButtons; 

