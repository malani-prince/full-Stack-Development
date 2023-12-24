const http = require('http')
const fs = require('fs')
const path = require('path')
const { error } = require('console')

http.createServer(
    (req, res) => {
        // const text = fs.readFileSync(path.join(__dirname, 'content', 'big.txt'))
        // res.end(text)
        const fileStream = fs.createReadStream(path.join(__dirname, 'content', 'big.txt'), 'utf-8')

        fileStream.on(
            'open',
            () => {
                fileStream.pipe(res)
            }
        )
        fileStream.on(
            'error',
            (err) => {
                console.log(err)
            }
        )
    }
)
    .listen(5000)


