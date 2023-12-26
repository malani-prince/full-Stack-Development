const errorHandlerMiddleware = async (err, req, res, next) => {
    // * catch the error we through
    console.log(err)
    return res.status(500).json({
        msg: "Something Went Wrong, Please try again later...☹️"
    })
}

module.exports = errorHandlerMiddleware