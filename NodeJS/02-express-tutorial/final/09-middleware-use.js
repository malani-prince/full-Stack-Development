const express = require('express')
const path = require('path')
const logger = require(path.join(__dirname, 'logger.js'))
// const logger = require('.\\logger.js')
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

app.use(logger)

app.get('/', (req, res) => {
    res.json({
        message: "Hello Every One This is Home Page"
    })
})


app.get('/about', (req, res) => {
    res.json({
        message: "About Page"
    })
})

app.get('/api/products', (req, res) => {
    res.json({
        message: "Hello Every One This is Product Page"
    })
})


app.get('/api/requirement', (req, res) => {
    res.json({
        message: "requirement Page"
    })
})



app.listen(5000, () => {
    console.log("server listening on port 5000....")
})