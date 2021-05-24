import React, {useState} from 'react'; 
import {Modal, Button} from 'react-bootstrap';


function BidModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Bid
            </Button>
            <Button variant="primary">Confirm Bid</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default BidModal
