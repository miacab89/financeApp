import React, { useEffect } from 'react'
import { Row, Container, Table} from 'react-bootstrap'; 
import Intraday from '../../API/alphaAPI';
import AlphaAPI from '../../API/alphaAPI';
import './style.css';


const Ticker = () => {
    useEffect(() => {
        const fetch = async () => {
        const { success, result } = await AlphaAPI.getAll("IBM")
        console.log(`success: ${success}`);
        console.log(result);
        console.log(Intraday)
        };
        fetch();
    }, []);

// const [data, setData] = useState([]);
// const [stocks, setStocks] = useState([]);

// const api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';

// async function getData() {
//     const stockData = await fetch(`${api}`)
//         .then(res => res.json())
//         setStocks(stockData)
//         console.log(stockData)  
//     };

// useEffect(() => {
//     getData(); 
// }); 

// let dailyAdj = JSON.stringify(stocks); 
 

return(
        <div className="ticker">
        <Container fluid>
            <Row>
                <h1 className="company-name">
                   {/* {dailyAdj} */}
                </h1>
                <div className="stock-data">
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
                    <td></td>
                    </tbody>
                </Table>
            </Row>
        </Container>
      </div>
    )
}

export default Ticker; 
