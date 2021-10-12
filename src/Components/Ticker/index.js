import React, { useEffect, useState } from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'; 
import './style.css';


const Ticker = () => {
 
const [data, setData] = useState([]);
const [stocks, setStocks] = useState([]);
const [activeId, setActiveId] = useState('0');

function toggleActive(id) {
  if (activeId === id) {
    setActiveId(null);
  } else {
    setActiveId(id);
  }
}

const api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

async function getData() {
    const stockData = await fetch(`${api}`)
        .then(res => res.json())
        setStocks(stockData)
        console.log(stockData)   
    };

useEffect(() => {
    getData(); 
}); 

const dailyAdj = JSON.stringify(stocks); 

function handleOnClick(event) {
    console.log('onClick', event);
  };

return(
        <div className="ticker">
            <Accordion defaultActiveKey="1">

<div className="panel-wrap">
  <div className="panel-header">
    <Accordion.Toggle onClick={handleOnClick} className="panel-toggle" variant="link" eventKey="0">
      IBM
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="0">
    <div className="panel-body">{dailyAdj}</div>
  </Accordion.Collapse>
</div>

<div className="panel-wrap">
  <div className="panel-header">
    <Accordion.Toggle onClick={handleOnClick} className="panel-toggle" variant="link" eventKey="1">
      Panel 2
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="1">
    <div className="panel-body">Body content for panel 2</div>
  </Accordion.Collapse>
</div>

</Accordion>    
      </div>
    )
}

export default Ticker; 
