const express = require('express')
const path = require('path')

app = express()

const people = require('.\\routes\\people')
const auth = require('.\\routes\\auth')

// * static assets
app.use(express.static(path.join(__dirname, 'methods-public')))

// * parse from data
app.use(express.urlencoded({ extended: false }))

// * parse json | http request get json 
app.use(express.json())

// Set the base routes
app.use('/api/people', people)

app.use('/login', auth)


app.listen(5000, () => {
    console.log("server listening on port 5000....")
})

