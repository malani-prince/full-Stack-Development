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

// * postman input to this route and return results.
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({
            success: false,
            msg: "please provide name value"
        })
    }
    res.status(201).send({
        success: true,
        data: [...people, name]
    })
})


// * update route
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params  // fetch data from path 
    const { name } = req.body  // from body section.

    if (!id && !name) {
        return res.status(400).json({
            success: false,
            msg: "please provide name value"
        })
    }
    else {
        let flag = false
        for (let i = 0; i < people.length; i++) {
            if (people[i].id === Number(id)) {
                people[i].name = name
                flag = true
                break
            }
        }

        if (!flag) {
            return res.status(400).json({
                success: false,
                msg: `please Insert Valid ID - ${id}`
            })
        }
        else {
            res.status(200).send({
                success: true,
                data: people
            })
        }
    }
})

// * Delete Route
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    console.log(person)
    
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )

    console.log(newPeople)

    return res.status(200).json({ success: true, data: newPeople })
})



// * This function in js work for fetch data we send and response it.
// const fetchPeople = async () => {
//     try {
//         //  fetch the data from using axios.get('<path of route>')
//         const { data } = await axios.get('/api/people')

//         // return the name we fetch to the front end.
//         const people = data.data.map((person) => {
//             return `<h5>${person.name}</h5>`
//         })

//         // change the input text to ==> "" [empty]
//         result.innerHTML = people.join('')
//     } catch (error) {
//         result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`
//     }
// }
// fetchPeople()
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

