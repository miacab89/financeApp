import React, { useState } from 'react'; 
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function BidModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
        bid: ''
    });

    function handleChange(event) {
        const {name,value} =event.target; 

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value 
            }

        }
    )}

    function handleClick(event) {
        event.preventDefault();
        const newBid = {
            bid: input.bid 
        }
        
        axios.post('http://localhost:3001/bid', newBid)
    }
  
    return (
      <>
        <Button variant="outline-light" onClick={handleShow}><FontAwesomeIcon icon={faCoins} />
         Place Bid
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header style={{background: "#808183", color: "white"}}>
            <Modal.Title><FontAwesomeIcon icon={faCoins} />Place Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input onChange={handleChange} value={input.bid} name="bid" autoComplete="off" className="form-control" placeholder="$" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Bid
            </Button>
            <Button variant="primary" onClick={handleClick}>Confirm Bid</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default BidModal
