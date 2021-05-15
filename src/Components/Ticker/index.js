import React, {useState} from 'react'
import { Row, Container, Table} from 'react-bootstrap';


function Ticker({companyName, open, low, high, adjustedClose, volume, divAmount}) {

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

    return(
        <div className="ticker">
        <Container>
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
            </Row>
        </Container>
      </div>
    
    )
}

export default Ticker
