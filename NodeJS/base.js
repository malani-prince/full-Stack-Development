/**
// * --------------------------------------------------------------
// *                  Node-Js-Fundamental (v20.10.0)
// *
// *                  1. Node and Express Fundamentals
// *                       a) Intro
// *                       b) Install
// *                       c) Node fundamentals
// *                       d) Express tutorial
// *                       e) Building Apps
// *                  2. Mongo | Mongoose
// *                  3. Applications
// *                  4. Complex REST APIs
// *                  5. MERN Application
// *                  6. More Projects
// *                  7. Deployment
// * --------------------------------------------------------------

// * Intro:
// nodeJS => Env to run js outside the browser
// built on chrome's v8 JS Engine
// Big community
// Full-stack

// * Requirements [Basics]
// HTML | CSS | JS (coding addict) | ES6
// callBacks | Promises | Async-Await

// * major difference Between the Browser javaScript and node.js
// ---------------------------------------------------------------
// |       Browser                  |            Node.js         |
// ---------------------------------------------------------------
// |       Dom                      |         No DOM             |
// |       Window                   |         No Window          |
// |       Interactive Application  |         Server side Apps   |
// |       No file System           |         Filesystem         |
// |       Fragmentation            |         Versions           |
// |       ES6 Modules              |         CommonJs           |
// |-------------------------------------------------------------|

 */

// * ###################################################
// *      Introduction part          (1-intro.js)
// * ###################################################


/* const amount = 9

// if (amount < 10){
//     console.log("small number")
// } else{
//     console.log("Large number")
// }

// console.log("Hear is my first Node.js app")
*/





// * ###################################################
// *          Global                 (2-global.js)
// * ###################################################

/* // Global     -   No window Object
// __dirname  -   path to current directory
// __filename -   file name
// require    -   function to use module (Common JS)
// module     -   info about current module (file)
// Process    -   info about env where the program being Executed

console.log(__dirname)
console.log(__filename)
setInterval(
    () => {
        console.log("hello world")
    }, 1000
)
*/





// * ###################################################
// *          Modules                (3-modules.js)
// * ###################################################

/*
//
// every file in node is module
// Module => Encapsulated code (only share minimum)
const john ="john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`hello there ${name}`)
}

sayHi('prince')
sayHi('john')
sayHi("peter")

*/





// * ###################################################
// *          Modules                (4-names.js)
// * ###################################################

/**
// * septate the different file and access those file using this syntax |
// * created file "4-names.js"
// * for export we use "module.exports"
// * import content using "required" Method
 */

// const secret = "SUPER SECRET"

// Share
// const john = "John"
// const peter = "peter"

// module.exports = {
//     john,
//     peter
// }




// * ###################################################
// *          Modules                (5 | 6)
// * ###################################################

/*const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

// Export Default
module.exports = sayHi */
/*
// same as ==> module.exports = { <ele1>, <ele2>}
// Syntax is different
module.exports.items = ['item1', 'item2']

const person = {
    name: 'bob',
}

module.exports.singlePerson = person

*/





// * ###################################################
// *          mind-grenade                (7)
// * ###################################################

/*
const num1 = 5
const num2 = 10

function addValue() {
    console.log("sum : ", num1+num2)
}

addValue()
*/





// * ###################################################
// *             Built in Modules
// *               a) os
// *               b) path
// *               c) FS
// *               d) HTTP
// *                      etc.....
// * ###################################################


// * ------------------
// *  Os - Module
// * ------------------

/**
OS Module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// return the system uptime in second
console.log(`system uptime is ${os.uptime} second`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.totalmem()
}
console.log(currentOS)
 */


// * ------------------
// *  Path - Module
// * ------------------

/** 
path - Module
const path = require('path')
console.log(path.sep)

const filepath = path.join('\content', 'subfolder', 'test.txt')
// const filepath = path.join('\content', '\subfolder', '\test.txt')
console.log(filepath)


const base = path.basename(filepath)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

*/



// * ------------------
// *  fs - Module
// * ------------------

/**

// const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')
// const path = require('path')

// const temp = fs.readFileSync('JS\\FrameWorks\\NodeJS\\content\\temp.txt', 'utf8');
// console.log(temp)

// writeFileSync(
//     'JS\\FrameWorks\\NodeJS\\content\\result-sync.txt',
//     `hear is the results: ${temp}`,
//     {flag: 'a'}  // append into the file 
// )

const { readFile, writeFile } = require('fs')

const { readFile, writeFile } = require('fs')

readFile(
    'JS\\FrameWorks\\NodeJS\\content\\temp.txt',
    'utf-8',
    (err, results) => {
        if (err) {
            console.log(err)
            return;
        }
        const first = results

        readFile(
            'JS\\FrameWorks\\NodeJS\\content\\result-sync.txt',
            'utf-8',
            (err, results) => {
                if (err) {
                    console.log(err)
                    return;
                }
                const second = results

                writeFile(
                    'JS\\FrameWorks\\NodeJS\\content\\result-sync-2.txt',
                    'How are You',
                    { flag: 'a' },
                    (err, results) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        else{
                            console.log(results)
                        }
                    }
                )
            }
        )
    }
)

 */





// * ###################################################
// *               HTTP
// *               a) Brief intro
// * ###################################################

/** HTTP

const http = require('http')

// Base route is called
const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end('Welcome to our home page')
        } else if (req.url === '/about') {
            res.end('Here is our short history')
        } else {
            res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
        }
    })

server.listen(5000)
 */





// * ###################################################
// *  NPM  (10.2.3) | setup | Install | uninstall | run
// * ###################################################

/*
// npm - Global command, comes with node
// npm --version

// * local dependency - use it only this particular project
// npm i <packageName>    // i ==> Install

// * Global Dependency - use it in any project
// npm install -g <packageName>


// *  package.json - manifest file (store important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter and skip)
// npm init -y (everything default)


// * npm i lodash 
// * npm i bootstrap
// * npm i nodemon --D

// * run the command:->  
// npm start : Similar way mention below 
// npm run dev : [for the set up in packages.json > scripts > Add this command into script object "dev": "nodemon NodeJS\\app.js" > then run this command 

// * how to uninstall packages
// * npm uninstall bootstrap

// * install the nodemon
// npm i nodemon

const _ = require('lodash')

const items = [1, [2, [3, [4, [5, [6]]]]]]
const newItems  = _.flattenDeep(items)
console.log(newItems)
*/





// * ###########################################################
// * 1. Event Loop | Async Patterns | Event Emitter and Streams 
// * 2. Main Concepts
// * 3. Pre-built code
// * ###########################################################


// * 1.
/*
//  Refer the folder [1-event-loops]

// console.log("hello")


// Node js Event Loop: 
// const { readFile } = require('fs')
// const path = require('path');
// const filePath = path.join(__dirname, 'content', 'temp.txt');

// console.log("Starting a first Task")

// // Check the file path
// // readfile is Asynchronous
// readFile(
//     filePath,
//     'utf-8',
//     (err, results) => {
//         if (err) {
//             console.log(err)
//             return
//         } else {
//             console.log(results)
//             console.log("Complete the Task move further")
//         }
//     }
// )

// console.log("....Starting next Task....")

// console.log("First")

// setTimeout(() => {
//     console.log("Second")
// }, 0)

// console.log("third")


// Listen is Async 
const http = require('http')

const server = http.createServer(
    (req, res) => {
        console.log('request Event')
        res.end('Hello World')
    }
)

server.listen(5000, () => {
    console.log("Server Listens on Port: 5000")
})
*/


// * 2.
/*
// it show why we use Async instead Sync 
// Listen method is Async 
const http = require('http')

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end("Home Page")
        } else if (req.url === '/about') {
            // Blocking Code
            for (let i = 0; i < 1000; i++) {
                for (let j = 0; j < 1000; j++) {
                    console.log(`${i} ${j}`)
                }
            }
            res.end("About section")
        } else {
            res.end("error page")
        }
    }
)

server.listen(5000, () => {
    console.log("Server Listens on Port: 5000")
})
*/


// * 3.
/* 
const { readFile, writeFile } = require('fs');
const { result, template } = require('lodash');

const pathPara = require('path');
const filePath = pathPara.join(__dirname, 'content', 'temp.txt');
const secondFile = pathPara.join(__dirname, 'content', 'result-sync-2.txt');
const util = require('util')

// Built in functionality provided by Utils packages for write the content with Async manner just pass the method inside the Promisify.
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const tempData = await readFilePromise(filePath, 'utf-8')
        const res = await readFilePromise(secondFile, 'utf-8')

        await writeFilePromise(
            'NodeJS//newFileForTest.txt',
            `This is the New file`,
            {flag: "a"}
        )
        console.log(tempData, res)
    }
    catch (error) {
        console.log(error)
    }
}

start()

// User define Promises 
// const getText = (path) => {
//     return new Promise((reject, resolve) => {
//         readFile(path, 'utf-8',
//             (err, data) => {
//                 if (err) {
//                     reject(err)
//                 }
//                 else {
//                     resolve(data)
//                 }
//             })
//     })
// }


// getText(filePath)
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))


// nodemon NodeJS/app.js
*/





// * ###########################################################
// * 1. Event - Driven Programming 
// * 2. Used Heavily in Node.js
// * ###########################################################

// * Event Emitter
/*
//  * EventEmitter

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data => name: ${name}  id: ${id} `)
})
customEmitter.on('response', () => {
    console.log("Some other logic")
})

// Order matter 
customEmitter.emit('response', 'john', 34)

// not going to print this
customEmitter.on('response', () => {
    console.log("Some other logic")
})
*/

/*

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)

*/





// * ###########################################################
// * 1. STREAMS : continues data 
// *   a) Writeable
// *   b) Readable
// *   c) Duplex [Read + Write]
// *   d) Transform
// * ##d########################################################


