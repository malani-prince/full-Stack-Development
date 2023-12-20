const path = require('path')
const { createReadStream } = require('fs')

const stream = createReadStream(
    path.join(__dirname, "content", "big.txt"),
    {
        highWaterMark: 90000,
        encoding: "utf-8"
    }
)

// default size id 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream(path.join(__dirname, "content", "big.txt"),{highWaterMark: 90000,})
// const stream = createReadStream(path.join(__dirname, "content", "big.txt"),{encoding: "utf-8"})

stream.on(
    'data',
    (result) => {
        console.log(result)
    }
)
stream.on('error', (err)=>console.log(err))
