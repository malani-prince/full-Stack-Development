// const names = require('./4-name')
// const {john, peter} = require('./4-name')
// const sayHi = require('./5-utils')
// const person = require('./6-alternative-flavor')

// // * working whole script mention in require field | 
// require('./7-mind-grenade')   // Outcome: sum :  15


// console.log(person)
// console.log(names)   // Outcome:  { john: 'John', peter: 'peter' }

// console.log(sayHi)
// sayHi("susan")
// sayHi(john)
// sayHi(peter)


// *             Built in Modules

/** OS Module 
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

/** path - Module 

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

/** fs - module 

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


// *             HTTP

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


// *     Event Loops | Await concepts 

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


const { readFileSync, writeFileSync } = require('fs')


