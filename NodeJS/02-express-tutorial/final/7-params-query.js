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








