const mongoose = require('mongoose'); 

const bidSchema = {
    user: String, 
    ticker: String,
    bid: Number, 
    asset_qty: Number
    
}

const Bid = mongoose.model("Bid", bidSchema)

module.export = Bid; 