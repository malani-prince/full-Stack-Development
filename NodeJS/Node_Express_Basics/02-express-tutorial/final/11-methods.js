const express = require('express')
const { people } = require('.\\data.js')
const path = require('path')

app = express()

// * static assets
app.use(express.static(path.join(__dirname, 'methods-public')))

// * parse from data
app.use(express.urlencoded({ extended: false }))

// * parse json | http request get json 
app.use(express.json())


// * home page
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    })
})


// * login function
// Add the data
app.post('/login', (req, res) => {
    // get the  form data using "res.body" method. 
    const { name } = req.body

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send("please provide the credential..")
    }
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        // msg goes into the javascript.html file and being called.. 
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})



app.listen(5000, () => {
    console.log("server listening on port 5000....")
})

