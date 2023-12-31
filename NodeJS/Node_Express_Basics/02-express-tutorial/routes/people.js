const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('..\\controllers\\people')


// // * get app users
// router.post('/', getPeople)

// // * create the person
// router.post('/', createPerson)

// // * postman input to this route and return results.
// router.post('/postman', createPersonPostman)

// // * update route
// router.put('/:id', updatePerson)

// // * Delete Route
// router.delete('/:id', deletePerson)


// alternative way to write the code 
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router