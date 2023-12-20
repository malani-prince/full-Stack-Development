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