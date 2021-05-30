const path = require('path'); 
const mongoose = require('mongoose'); 
const mongoURI = process.env.MONGO_URI;

// Connected to Cluster Atlas MongoDB

require("dotenv").config({ path: path.resolve(__dirname, './.env') });

module.exports = async () => {
await mongoose
  .connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
  return mongoose; 
}