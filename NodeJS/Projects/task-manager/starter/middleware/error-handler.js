const { CustomAPIError } = require('..\\errors\\custome-error')

const errorHandlerMiddleWare = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json(
            {
                msg: err.message
            }
        )
    }
    return res.status(500).json({
        message: "something went wrong "
    })
}

module.exports = errorHandlerMiddleWare