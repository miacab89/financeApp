import React, {useState} from 'react';
import {Collapse, Button} from 'react-bootstrap';

const Positions = () => {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
      >Your Positions
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
        </div>
    )
}

export default Positions; 
