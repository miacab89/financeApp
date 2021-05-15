import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticker from './Components/Ticker.js';
import Trident from './trident.png';
import './App.css'; 
import {Row, Col, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [data, setData] = useState({
    metaData: {
          date: "5/13/2021",
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
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>Close</th>
              <th>High</th>
              <th>Low</th>
              <th>Volume</th>
              <th>Adjusted Close</th>
              <th>Dividend Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.metaData.date}</td>
              <td>{data.metaData.open}</td>
              <td>{data.metaData.close}</td>
              <td>{data.metaData.open}</td>
              <td>{data.metaData.close}</td>
              <td>{data.metaData.open}</td>
              <td>{data.metaData.close}</td>
              <td>{data.metaData.open}</td>
            </tr>
          </tbody>
          </Table>
          <Col md="auto">
            <Table striped bordered hover size="sm">
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
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  )
}



