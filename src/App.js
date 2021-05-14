import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticker from './Components/Ticker.js';
import Trident from './trident.png';
import './App.css'; 
import {Row, Col} from 'react-bootstrap';


export default function App() {
  const [data, setData] = useState({
    metaData: {
      company: "IBM",
      open: "141.45",
      high: "144.9",
      low: "141.28",
      close: "144.17",
      adjClose: "144.17",
      volume: "4598920",
      divAmount: "0.0000"
    }
  }); 

    // useEffect(() => {
    //   async function getStonks() {
    //     const response = await axios.get
    //     ('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=REACT_API_KEY')
    //     setData(response.data); 
    //     console.log(data)
    //   }
    //   getStonks(data);
    // })

  return(
    <div>
      <img src={Trident} className="tridentlogo" alt="tridentlogo" />
      <center><h1>Trident Stock Trading App</h1></center>
      <div className="ticker">
        <Row>
          <Col md="auto">
            <Ticker
              companyName={data.metaData.company}
              open={data.metaData.open}
              close={data.metaData.close}
              high={data.metaData.high}        
              low={data.metaData.low}
              volume={data.metaData.volume}
              adjClose={data.metaData.adjClose}
              divAmount={data.metaData.divAmount}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}



