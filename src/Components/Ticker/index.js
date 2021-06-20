import React, { useState, useEffect } from 'react'
import { Row, Container, Table} from 'react-bootstrap'; 
// import { TickerModel } from '../utils/tickerModel'; 
import './style.css';


function Ticker() {

const [data, setData] = useState([]);
const [stocks, setStocks] = useState({
    metaData: {
        symbol: "",
        high: "",
        low: "",
        open: "",
        close: "",
        adjClose: ""
    }
});

const api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

const getData = async() => {
    const stockData = await fetch(`${api}`)
        .then(res => res.json())
        setStocks(stockData)
        console.log(stockData)

    let adj = data.push(stockData);
    console.log(adj)

    for (let daily of Object.keys(adj)) {
        setData(daily)
        console.log(daily) 

        for (let stock of Object.keys(daily)) {
            setData(stock)
            console.log(stock)
        }
    }
    return getData; 
};

useEffect(() => {
    getData();
}); 


return(
        <div className="ticker">
        <Container fluid>
            <Row>
                <h1 className="company-name">
                   {JSON.stringify(stocks)}
                </h1>
                <div className="stock-data">
                    {/* {stocks.map((stock) => {
                        return(
                            <div>
                                <li>{stock.data.metaData.open}</li>
                            </div>
                        )
                    })} */}
                </div>
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
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
                </Table>
            </Row>
        </Container>
      </div>
    )
}

export default Ticker; 
