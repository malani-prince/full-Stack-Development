const CustomAPIError = require('.\\custom-error')
const BadRequestError = require('.\\bad-request')
const UnauthenticatedError = require('.\\unauthenticated')
const notFoundError = require('.\\not-found')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError,
    notFoundError
}