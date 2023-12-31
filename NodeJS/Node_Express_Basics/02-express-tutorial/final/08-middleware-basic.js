const express = require('express')
const path = require('path')

const app = express()


// req => middleware => res 
// when we work with middle ware we use next(). for passing response to next middle ware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, " ", url, " ", time)
    next()
}

app.get('/', logger, (req, res) => {
    res.json({
        message: "Hello Every One This is Home Page"
    })
})


app.get('/about', (req, res) => {
    res.json({
        message: "About Page"
    })
})



app.listen(5000, () => {
    console.log("server listening on port 5000....")
})