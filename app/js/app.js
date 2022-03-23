//import express
const express = require('express');
//creates a new express application called app. This is what is sent off to any file that calls this one
const app = express();
var path = require('path');

//impots packages
const rateLimit = require("express-rate-limit");
const morgan = require('morgan');
const bodyParser = require('body-parser');

//enables cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const limiter = rateLimit({
    windowMs: 1000,
    max: 10,
    message: '429 too many requests'
});


//applies all the packages
app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    limiter,
    morgan('dev'),
);



//routes
const chairsRoutes = require('./routes/chair.js')
const homeRoutes = require('./routes/home.js')


app.use('/test', chairsRoutes)
app.use('/', homeRoutes)
app.use('/favicon.ico', express.static('./favicon/favicon.ico'));
app.use('/css', express.static('./pages/css'))
app.use('/chairs', express.static('./pages/chairs'))
app.use('/img', express.static('../../pics'))
app.use('/cornhole', express.static('./pages/cornhole'))
app.use('/tables', express.static('./pages/tables'))


//handles 404 not found
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    error.message = "404 not found"
    next(error);
});


//handles internal server error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



module.exports = app;