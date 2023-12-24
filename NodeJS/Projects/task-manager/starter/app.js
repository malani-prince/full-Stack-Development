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

const express = require('express')
const path = require('path')
const route = require('.\\routes\\tasks')
const contentDB = require('.//db//connection')
const connectDB = require('.//db//connection')
require('dotenv').config()
const MONGO_URI = "mongodb+srv://malaniprince55:123@nodeexpress.yasx2kg.mongodb.net/?retryWrites=true&w=majority"
const app = express()

// * middle ware
app.use(express.json())   // for response the json in our file formate 

// * return all Task
app.use('/api/v1/tasks', route)



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