require('dotenv').config()
// * import module from ===> models > User.js
const User = require('..\\models\\Users')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('..\\errors\\index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { use } = require('express/lib/router')

const register = async (req, res) => {

    // * How to Handel Errors | (method - 1)
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequestError("Please Provide Valid name, Email, Password")
    }


    // * Hash our password and then store it
    // Lib ===> bcryptjs 
    // const { name, email, password } = req.body

    // const salt = await bcrypt.genSalt(10)  // Random bytes
    // const hashPass = await bcrypt.hash(password, salt)
    // const tempUser = { name, email, password: hashPass }

    // * Creating New User in DB.

    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({
        user: {
            name: user.name,
        },
        token: token
    })
}



const login = async (req, res) => {
    const { email, password } = req.body

    // * Check Email and Pass is Passed or not
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({ email })
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

    // * Compare Password.
    const match = await user.comparePassword(password)
    console.log(match)

    if (!match) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })


}

module.exports = {
    login,
    register
}