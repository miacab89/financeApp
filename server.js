const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 3001; 

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", require("./routes/bidRoutes"));
app.use("/connection", require("./config/connection")); 

app.listen(PORT, () => {
    console.log(`Serving is running at Port ${PORT}!`)
  }); 















