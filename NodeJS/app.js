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





// *       NPM    (10.2.3)

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

const _ = require('lodash')

const items = [1, [2, [3, [4, [5, [6]]]]]]
const newItems  = _.flattenDeep(items)
console.log(newItems)