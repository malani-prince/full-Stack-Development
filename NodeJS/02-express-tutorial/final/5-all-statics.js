const express = require('express')
const path = require('path')

const app = express()

// to use css|js|images we have to import this functionality.
// setup static nd middleware
app.use(express.static(path.join(__dirname, 'public')))

/** homePage */
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(path.join(__dirname, 'navbar-app', 'index.html')))
// ADDING TO static assets  [in public file ]
// SSR - Template engine
// })

/** other */
app.get('*', (req, res) => {
    res.status(404).send("Resource not found")
})

app.listen(5000, () => {
    console.log("server listening on port 5000....")
})