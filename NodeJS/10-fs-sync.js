const { readFileSync, writeFileSync } = require('fs')
const fs = require('fs')
const path = require('path')

const temp = fs.readFileSync('JS\\FrameWorks\\NodeJS\\content\\temp.txt', 'utf8');
// console.log(temp)

// writeFileSync(
//     'JS\\FrameWorks\\NodeJS\\content\\result-sync.txt',
//     `hear is the results: ${temp}`,
//     {flag: 'a'}  // append into the file 
// )

/** fs - module */

const { readFileSync, writeFileSync } = require('fs')
const fs = require('fs')
const path = require('path')

const tempData = fs.readFileSync('JS\\FrameWorks\\NodeJS\\content\\temp.txt', 'utf8');
console.log(tempData)

writeFileSync(
    'JS\\FrameWorks\\NodeJS\\content\\result-sync.txt',
    `hear is the results: ${tempData}`,
    {flag: 'a'}  // append into the file 
)


console.log("..........Task Done Moving to next one..........")