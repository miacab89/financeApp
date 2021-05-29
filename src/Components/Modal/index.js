import React, {useState} from 'react'; 
import {Modal, Button} from 'react-bootstrap';
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
        <Button variant="primary" onClick={handleShow}>
          Place Bid
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Create Bid</Modal.Title>
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
