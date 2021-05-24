const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express(); 
const PORT = 4000; 



// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://cluster1.uqr4r.gcp.mongodb.net/trident")

app.use("/", require("./routes/bidRoutes"));

app.listen(PORT, () => {
    console.log(`Serving is running at Port ${PORT}!`)
  }); 















