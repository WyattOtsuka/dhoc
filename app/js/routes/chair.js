//imports express
var path = require('path');

const express = require('express')
const fs = require('fs')
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200)
    res.sendFile(path.resolve(__dirname + "./../car.png"))
});

module.exports = router