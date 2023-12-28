// Note : Always put the app.route() below the app.json()

// * ###################################
// -------------------------------------
// * JWT - Json Web Token : https://jwt.io/#decoded-jwt
// -------------------------------------
// * eXchange data between Two parties.
// * security | sure about data integrity.
// * Login Req ====> send 
// * Signed JWT <==== Response 
// -------------------------------------
// * Signed JWT + Req ====> send 
// *  Response  <==== send 
// -------------------------------------
// * JWT Structure
// -> Base64Url Encode
// Header - (type of token & algorithm)
// PayLoad - (place the information about user) 
// Signature - (String value)
// * ###################################

require('dotenv').config();
require('express-async-errors');

// * import Modules
const path = require('path')
const express = require('express');
const app = express();

// * Router Access
const mainRouter = require('.\\routes\\jwt-routes');

// * Use Error Handling
const notFoundMiddleware = require('.\\middleware\\not-found')
const errorHandlerMiddleware = require('.\\middleware\\error-handler')

// * Set Middleware for frontEnd Access And SET Json() Formation for the Access.
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

// * Settle Routes.
app.use('/api/v1', mainRouter);

// * Set Error Middle Ware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// * Start The Servers
const port = 3000

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()