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