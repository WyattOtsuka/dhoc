//imports express
var path = require('path');

const express = require('express')
const fs = require('fs')
const router = express.Router();


router.get(['/', '/chairs?/', '/tables?/','/sets?/', '/cornhole?/'], (req, res, next) => {
    //home
    if(req.originalUrl == "/") {
        res.status(200)
        res.sendFile(path.resolve(__dirname + "./../pages/test.html"))
    //chairs
    } else if(req.originalUrl == "/chairs/" || req.originalUrl == "/chairs") {
        res.status(200)
        res.sendFile(path.resolve(__dirname + "./../pages/allProdPages/chairs.html"))
    //cornhole
    } else if(req.originalUrl == "/cornhole/" || req.originalUrl =="/cornhole") {
        res.status(200)
        res.sendFile(path.resolve(__dirname + "./../pages/allProdPages/cornhole.html"))
    //tables
    } else if(req.originalUrl == "/tables/" || req.originalUrl == "/tables") {
        res.status(200)
        res.sendFile(path.resolve(__dirname + "./../pages/allProdPages/tables.html"))
    //sets
    } else if(req.originalUrl == "/sets/" || req.originalUrl =="/sets") {
        res.status(200)
        res.sendFile(path.resolve(__dirname + "./../pages/allProdPages/sets.html"))
    } else {
        res.status(405)
        res.send()
    }
});

module.exports = router