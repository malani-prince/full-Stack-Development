require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('.\\db\\connect-db');
const productsRouter = require('./routes/products-route');

const notFoundMiddleware = require('.\\middleware\\not-found');
const errorMiddleware = require('.\\middleware\\error-handler');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);



// * Connection Establish for Server 
const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log("Server Listen on port 3000...")
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()