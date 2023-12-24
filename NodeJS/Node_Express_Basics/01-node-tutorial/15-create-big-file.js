const { writeFileSync, write } = require('fs')
const path = require('path')

for (let i = 0; i < 100000; i++) {
    writeFileSync(
        path.join(__dirname, 'content', 'big.txt'),
        `hello World ${i}\n`,
        {flag: 'a'}
    )
} 