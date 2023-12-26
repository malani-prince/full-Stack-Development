require('dotenv').config()

const connectDB = require('.\\db\\connect-db')
const Product = require('.\\models\\product-models')

const jsonProducts = require('.\\products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        // Delete the previous data if there 
        await Product.deleteMany();

        // * insert Data into DB
        await Product.create(jsonProducts)

        console.log("success!!!!")

        // terminate the whole process 
        process.exit(0)

    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

start()