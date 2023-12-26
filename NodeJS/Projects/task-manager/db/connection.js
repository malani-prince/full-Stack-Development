
const mongoose = require('mongoose')

// const connectionString = "mongodb+srv://malaniprince55:123@nodeexpress.yasx2kg.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB