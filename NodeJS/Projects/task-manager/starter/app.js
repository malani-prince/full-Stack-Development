// *   Total Routes | REST API (representational state transfer)
// * #############################################################
//        get    -  api/tasks           - get all the task        
//        post   -  '/api/tasks         - create a new Task
//        get    -  api/v1/tasks/:id    - get single task
//        patch  -  '/api/v1/tasks/:id  - update task
//        delete -  '/api/v1/tasks/:id' - delete task
// * #############################################################


// *                           MongoDB
// * #############################################################
//                   NoSql, Non relational DB
//                   Store Json
//                   easy to get started
//                   free cloud hosting - ATLAS
// * #############################################################

// *                       Patch VS Put
// * #############################################################
//  When we use PUT method it will remove the other things which presents into the DATABASE and overWrite the value
//  and in the patch method - it simply change the part which are mention in the Body part.
// * #############################################################



// * Note:
// 1. When we want to use the app.use(express.static("<path>")) for the path variable must use the package "path" with out path we can not get the Web page.

const path = require('path')

const express = require('express')
const app = express()

const route = require('.\\routes\\tasks')
const connectDB = require('.//db//connection')

require('dotenv').config()
const MONGO_URI = "mongodb+srv://malaniprince55:123@nodeexpress.yasx2kg.mongodb.net/?retryWrites=true&w=majority"

const notfound = require('.\\middleware\\not-found')
const errorHandlerMiddleWare = require('.\\middleware\\error-handler')

// * middle ware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// * return all Task
app.use('/api/v1/tasks', route)

app.use(notfound)
app.use(errorHandlerMiddleWare)


const port = 3000
const start = async () => {
    try {
        await connectDB(MONGO_URI)
        app.listen(port, () => {
            console.log("server is Listen on port 3000...")
        })
    } catch (err) {
        console.log(err)
    }
}

start()