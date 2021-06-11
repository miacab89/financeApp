import React, {useState} from 'react'
import { Row, Container, Table} from 'react-bootstrap';
import './style.css';


function Ticker() {

const api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=ALPHA_VANTAGE_API_KEY';

(async () => {
    const stockData = await fetch(`${api}`)
        .then(response => response.json());
        console.log(stockData); 
})();


const [data] = useState({
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


    return(
        <div className="ticker">
        <Container fluid>
            <Row>
                <h1 className="company-name">{data.metaData.company}</h1>
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
            </Row>
        </Container>
      </div>
    
    )
}

export default Ticker
