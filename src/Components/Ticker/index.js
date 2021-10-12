import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'; 
import './style.css';


function Ticker() {
 
const [data, setData] = useState([]);
const [stocks, setStocks] = useState([]);


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


return(
    <div className="top-5">
        <center>
            <h3>Recently Searched Tickers</h3>
        </center>
        <div className="ticker">
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>IBM</Accordion.Header>
    <Accordion.Body>
      {dailyAdj}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    </div>
    )
}

export default Ticker; 
