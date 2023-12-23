/**
 * ##############################################################
 *   Create Basic sever | Status code | different routes
 * ##############################################################
 */

/*
console.log("Express Tutorial....")

const http = require('http')
const path = require('path')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync(path.join(__dirname, "navbar-app", "index.html"))
const homeStyle = readFileSync(path.join(__dirname, "navbar-app", "style.css"))
const homeImage = readFileSync(path.join(__dirname, "navbar-app", "logo.png"))
const homeLogic = readFileSync(path.join(__dirname, "navbar-app", "browser-app.js"))

const server = http.createServer((req, res) => {
    // // console.log("user hit the server")
    // // Return type of method
    // // console.log(req.method)
    // // console.log(req.url)

    // * request calling
    const url = req.url
    console.log(url)

    // Home page
    if (url === '/') {
        // Set the status code and headers
        res.writeHead(200, { 'content-type': 'text/html' })

        // Send the response body
        res.write(homePage)        // End the response
        res.end()
    }
    // about
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1> about Page </h1>')
        res.end()
    }
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    } else if (url === '/logo.png') {
        res.writeHead(200, { 'content-type': 'image/png+xml' })
        res.write(homeImage)
        res.end()
    }

    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeLogic)
        res.end()
    }
    // other
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1> Page not found </h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
*/




/**
 * ##############################################################
// *  Express Intro  *\\

// * npm i express --save

// * Methods:
 *  [✅]   app.get     : Read Data   [Default request]
 *  [✅]   app.post    : insert data
 *  [✅]   app.put     : update data
 *  [✅]   app.delete  : remove data
 *  [✅]   app.all     : work with all of this
 *  [✅]   app.use     : middleware [crucial part of express]
 *  [✅]   app.listen  : [use port for local machine]

* ##############################################################
 */

// * Basic route example | how to use status code and method mention above.
/*
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
*/

// * Static functionality added
/*
const express = require('express')
const path = require('path')

const app = express()

// to use css|js|images we have to import this functionality.
// setup static nd middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, 'navbar-app', 'index.html')))
})

app.get('*', (req, res) => {
    res.status(404).send("Resource not found")
})

app.listen(5000, () => {
    console.log("server listening on port 5000....")
})

*/


// * all static use (direct | Must show)
/*
const express = require('express')
const path = require('path')

const app = express()

// to use css|js|images we have to import this functionality.
// setup static nd middleware
app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(path.join(__dirname, 'navbar-app', 'index.html')))
// ADDING TO static assets  [in public file ]
// SSR - Template engine
// })


app.get('*', (req, res) => {
    res.status(404).send("Resource not found")
})

app.listen(5000, () => {
    console.log("server listening on port 5000....")
})

*/





/**
 * ##############################################################
// *                         Express.js
// * |---------------------------------------------------------|
// * |         API               |                SSR          |
// * |---------------------------------------------------------|
// * |      API-JSON             |             SSR-TEMPLATE    |
// * |      SEND Data            |             SEND TEMPLATE   |
// * |      RES.JSON()           |             RES.RENDER()    |
// * |---------------------------------------------------------|

//  * Json Response
 * ##############################################################
*/

// * Actual Route calls | path parameter | query parameter
/*
const express = require('express')
const path = require('path')
const { products } = require('.\\data.js')
const app = express()


// * Home page
app.get('/', (req, res) => {
    // res.json(products)
    res.status(200).send(
        `
        <h1>Home Page</h1>
        <a href='/api/products'>Product</a>
        `
    )
})


// * Product Route
app.get('/api/products', (req, res) => {

    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })

    res.status(200).json(newProduct)
})


// * normal route for handling multiple query with path parameter
app.get('/api/products/:productID/review/:reviewID', (req, res) => {
    const data = req.params
    console.log(data)   // { productID: '23', reviewID: '3' }
    res.status(200).json(
        data
    )
    console.log("Hello Every One..")
})


// * Add Query in route [instead doing it manually]
app.get('/api/v1/query', (req, res) => {
    // http://localhost:5000/api/v1/query?name=%22prince%22
    // Add the multiple element with using '&' operator
    // http://localhost:5000/api/v1/query?name=%22prince%22&id=5
    // Outcome: { name: '"prince"' }
    // n number od query we can pass ans display it

    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter(
            (product) => {
                return product.name.startsWith(search)
            }
        )
    }
    // set the limits for the list coming from sortedProduct array.
    //
    if (limit) {
        // python --> a[:2]  | javaScript --> sortedProducts.slice(0, Number(limit))
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no product match your search')
        return res.status(200).json({
            success: true,
            data: []
        })
    }
    console.log(req.query)
    return res.status(200).json(sortedProducts)
})


// * fetch particular product
// Padding parameter into the route path
app.get('/api/products/:productId', (req, res) => {
    // console.log(req)
    // console.log(req.params)   //   params: { productId: '3' },
    const { productId } = req.params
    const singleProduct = products.find(
        (product) => product.id === Number(productId)
    )
    // if(!singleProduct){}  : Also work
    if (singleProduct === undefined) {
        res.status(404).json(
            {
                message: "Product id is not Define."
            }
        )
    }
    else {
        res.status(200).json(singleProduct)
    }
})


// * manage other route [unwanted routes manage ]
app.get('*', (req, res) => {
    res.json({
        message: "page not found"
    })
})




// Server config :------------->
app.listen(5000, () => {
    console.log("server listening on port 5000....")
})


*/

// * middle ware | use case | "next()" function use.
/*
const express = require('express')
const path = require('path')
const logger = require(path.join(__dirname, 'logger.js'))
// const logger = require('.\\logger.js')
const app = express()

// * create the "logger.js" file and transfer the data into it

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


// app.use(logger)
// app.use('/api', logger) : for particular use case

app.get('/api', (req, res) => {
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
*/

// * middle ware | authentication | Methods for middle ware
/*
// * for path query
// const logger = require(path.join(__dirname, 'logger.js'))

const express = require('express')
const path = require('path')
const logger = require('.\\logger.js')
const authorize = require('.\\authorize.js')


// * Application set up
const app = express()

// * create the "logger.js" file and transfer the data into it
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

/*
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

*/

// * static Assets | parse from data | parse json | http request get json | Postman api introduction and use case
/*
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

*/

// * Put Request access | Route
/*
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params  // fetch data from path
    const { name } = req.body  // from body section.
    if (!id && !name) {
        return res.status(400).json({
            success: false,
            msg: "please provide name value"
        })
    }

    // * find method is use for finding object
    const person = people.find(
        (person) => person.id === Number(id)
    )
    console.log(person)

    // * if people is not find or not
    if (person === undefined) {
        return res.status(404).json({
            success: false,
            msg: "please provide a Valid ID"
        })
    }
    else {
        return res.status(200).send({
            success: true,
            data: [...people]
        })
    }
    // for (let i = 0; i < people.length; i++) {
    //     if (people[i].id === Number(id)) {
    //         people[i].name = name
    //         break
    //     }
    // }

})

*/

// * Delete Request Access | Route
/*
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

*/

// * Whole Above functionality In one flow 
/*
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

*/




// * MVC

// creating auth.js
// creating people\\people.js
// creating controller\\people.js
// modify app.js 