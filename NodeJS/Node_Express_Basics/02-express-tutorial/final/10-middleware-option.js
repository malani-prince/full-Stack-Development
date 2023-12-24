// * for path query
// const logger = require(path.join(__dirname, 'logger.js'))

const express = require('express')
const path = require('path')
const logger = require('.\\logger.js')
const authorize = require('.\\authorize.js')


// * Application set up
const app = express()

// * create the "logger.js" file and transfer the data into it
/*
// // req => middleware => res 
// // when we work with middle ware we use next(). for passing response to next middle ware
// const logger = (req, res, next) => {
//     // const method = req.method
//     // const url = req.url
//     // const time = new Date().getFullYear()
//     const data = {
//         method: req.method,
//         url: req.url,
//         time: new Date().getFullYear()
//     }
//     console.log(data)
//     next()
// }
*/


// * Middle ware functionality
// logger functionality 
// app.use(logger)
// app.use('/api', logger) : for particular use case


// 1. use vs route
// 2. option - our own / express / third party

// * a) way
// use multiple middle ware.
// app.use([logger, authorize])  // flow of the writing matters

// * b) way
// express way
// app.use(express.static('.\\public'))

// * c) third party middle ware
// morgan npm  --> external package we have to download.

// * dummy
app.get('/', (req, res) => {
    res.send("Home Sweet Home")
})

// * Home page route
app.get('/api', (req, res) => {
    res.json({
        message: "Hello Every One This is Home Page"
    })
})


// * about page route
app.get('/about', [logger, authorize] ,(req, res) => {
    console.log(req.user)
    res.json({
        message: "About Page"
    })
})


// * Product route
app.get('/api/products', (req, res) => {
    res.json({
        message: "Hello Every One This is Product Page"
    })
})


// * requirement route
app.get('/api/requirement', (req, res) => {
    res.json({
        message: "requirement Page"
    })
})



app.listen(5000, () => {
    console.log("server listening on port 5000....")
})