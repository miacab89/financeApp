const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const mongoURI = process.env.MONGO_URI;
const app = express(); 
const PORT = 3001; 

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setTimeout(function() {
  mongoose.connect(mongoURI, 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    }).catch(error => (error));
}, 60000)


app.use("/", require("./routes/bidRoutes"));


app.listen(PORT, () => {
    console.log(`Serving is running at Port ${PORT}!`)
  }); 















