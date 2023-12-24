const express = require('express')
const router = express.Router()


// * login function
router.post('/', (req, res) => {
    // get the  form data using "res.body" method. 
    const { name } = req.body

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send("please provide the credential..")
    }
})

module.exports = router