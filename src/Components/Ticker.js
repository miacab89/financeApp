import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';

const Ticker = ({companyName, open, low, high, adjustedClose, volume, divAmount}) => {
    return(
    <div>
        <Row>
            <Container>
                <Col xs={{ order: 1 }}>
                    <h2>{companyName}</h2>
                    <p>Open: {open}</p>
                    <p>Low: {low}</p>
                    <p>High: {high}</p>
                    <p>Adjusted Close: {adjustedClose}</p>
                    <p>Volume: {volume}</p>
                    <p>Dividend Amount: {divAmount}</p>
                </Col>
            </Container>
        </Row>
    </div>
    )
}

export default Ticker
