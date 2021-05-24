const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 4000; 
const dayjs = require('dayjs')
const now = dayjs()
dayjs(now).format('MM-DD-YYYY')
console.log(dayjs)


// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(now); 
})

app.listen(PORT, () => {
    console.log(`Serving is running at Port ${PORT}!`)
  }); 

