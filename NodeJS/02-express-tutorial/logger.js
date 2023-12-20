// req => middleware => res 
// when we work with middle ware we use next(). for passing response to next middle ware
const logger = (req, res, next) => {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    const data = {
        method: req.method,
        url: req.url,
        time: new Date().getFullYear()
    }
    console.log(data)
    next()
}

module.exports = logger