const express = require('express')
const path = require('path')
const { products } = require('.\\data.js')
const app = express()

// Home page
app.get('/', (req, res) => {
    // res.json(products)
    res.status(200).send(
        `
        <h1>Home Page</h1>
        <a href='/api/products'>Product</a> 
        `
    )
})

// Product Route
app.get('/api/products', (req, res) => (
    res.status(200).json(products)
))

// manage other route
app.get('*', (req, res) => {
    res.json({
        message: "page not found"
    })
})

app.listen(5000, () => {
    console.log("server listening on port 5000....")
})