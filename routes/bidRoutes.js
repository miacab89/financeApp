const express = require('express');
const router = express.Router();
const Bid = require('../models/bidModel');

router.route("/bid").post((req, res) => {
    const bid = req.body.bid;
    const newBid = new Bid({
        bid
    })
    newBid.save(); 
});

module.exports = router;