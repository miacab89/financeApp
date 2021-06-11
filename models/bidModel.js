const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const bidSchema = new Schema({
    user: String,
    ticker: String,
    bid: Number,
    asset_qty: Number
})

const Bid = mongoose.model("Bid", bidSchema)

module.exports = Bid; 





