const { readFile } = require('fs')
const path = require('path');
const filePath = path.join(__dirname, 'content', 'temp.txt');

console.log("Starting a first Task")

// Check the file path
// readfile is Asynchronous
readFile(
    filePath,
    'utf-8',
    (err, results) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(results)
            console.log("Complete the Task move further")
        }
    }
)

console.log("....Starting next Task....")
