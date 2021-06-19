import React, { useState, useEffect } from 'react'
import { Row, Container} from 'react-bootstrap'; 
import './style.css';


function Ticker() {

const [stocks, setStocks] = useState([]);
const [data, setData] = useState({
metaData: {
   date: {
        open: [],
        close: [],
        high: [],
        low: [], 
        volume: []
   }}
});

const api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

const getData = async() => {
    const stockData = await fetch(`${api}`)
        .then(response => response.json())
        console.log(stockData);
        setStocks(stockData)
    };

useEffect(() => {
    let series = true;
    getData() 
    .then(daily => {
        if(series) {
        setData(daily)
        }
    }); 
    return() => series = false; 
}, []); 


return(
        <div className="ticker">
        <Container fluid>
            <Row>
                <h1 className="company-name">
                    {/* {data.metaData.company} */}
                </h1>
                <div className="stock-data">
                    <div>
                       {/* {JSON.stringify(stocks)} */}
                       <ul>
                       {stocks.set(daily => <li key={daily.stocks}>{stocks}</li>)}
                       </ul>
                    </div>
                </div>
                {/* <Table striped bordered hover size="sm">
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
                </thead> */}
                {/* <tbody>
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
                </tbody> */}
                {/* </Table> */}
            </Row>
        </Container>
      </div>
    )
}

export default Ticker
