
// * Access .env file and value
require('dotenv').config()

// * Handling Try and Catch Block 
require('express-async-errors')


// * Extract Security Packages.
const helmet = require('helmet')
const cors = require('cros')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')


// * load the module called Express
const express = require('express')
const app = express()



// * load DB connection from ===> db > db-connection
const connectDB = require('.\\db\\db-connection')

// * Set authenticate USer this function come  from ===>  middleware > auth.js
const authenticateUser = require('.\\middleware\\auth')

// * initialize middle ware functionality from  ===> middleware > error-handler | not-found
const notFoundMiddleware = require('.\\middleware\\not-found')
const errorHandlerMiddleware = require('.\\middleware\\error-handler')

const authRoute = require('.\\routers\\auth-routers')
const jobRoutes = require('.\\routers\\job-routers')
const { TokenExpiredError } = require('jsonwebtoken')

// * Set middle ware | set Router Functionality | Error handler | Authentication | User Secure Packages.

app.use(express.json())   // essential Part of Getting json Response.

// Secure Packages.
app.set('true proxy', 1)
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 min
        max: 100 // Limit Each IP to 100 Request Per Window
    })
)
app.use(helmet())
app.use(cors())
app.use(xss())

// Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/jobs', authenticateUser, jobRoutes)

// Error
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


// * Initialized Server and Port Number with DB Connection.

const portNumber = 3000
const Start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(portNumber, () => {
            console.log("Server Listen on Port Number => 3000")
        })
    }
    catch (error) {
        console.log(error)
    }
}

Start()
