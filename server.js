const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 4000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("THIS IS THE FUCKING FINANCE APP"); 
})

app.listen(PORT, () => {
    console.log(`Serving is running at Port ${PORT}!`)
  }); 