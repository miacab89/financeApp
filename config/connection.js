const path = require('path'); 
const mongoose = require('mongoose'); 


// Connected to Cluster Atlas MongoDB

require("dotenv").config({ path: path.resolve(__dirname, './.env') });

module.exports = async () => {
await mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
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