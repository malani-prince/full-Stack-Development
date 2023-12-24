const express = require('express')

const app = express()

// invoke every time, when user reach this route.
app.get('/', (req, res) => {
    console.log("User hit the resource ")
    res.status(200).send("Home Page")
})

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req, res)=>{
    res.status(404).send(`<h1>Resource not Found</h1>`)
})



app.listen(5000, () => {
    console.log("server listening on port 5000")
})