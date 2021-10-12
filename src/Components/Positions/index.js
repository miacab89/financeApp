import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import './style.css';



const Positions = () => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return(
        <div>
    <Button 
        onClick={handleShow}
        aria-controls="example-collapse-text"
        aria-expanded={handleShow}
        variant="outline-light"
    ><FontAwesomeIcon icon={faChess} />  Your Positions
      
    </Button>
    <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header style={{background: "#808183", color: "white"}}>
            <Modal.Title><FontAwesomeIcon icon={faChess} />Your Positions</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
    </Modal>
    </div>
    )
}

export default Positions; 
