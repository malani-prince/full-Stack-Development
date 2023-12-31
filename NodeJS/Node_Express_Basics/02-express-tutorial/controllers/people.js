let { people } = require('..\\data.js')


const getPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        // msg goes into the javascript.html file and being called.. 
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

const createPerson  = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).send({ success: true, person: name })
}


const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({
            success: false,
            msg: "please provide name value"
        })
    }
    res.status(201).send({
        success: true,
        data: [...people, name]
    })
}

const updatePerson = (req, res) => {
    const { id } = req.params  // fetch data from path 
    const { name } = req.body  // from body section.

    if (!id && !name) {
        return res.status(400).json({
            success: false,
            msg: "please provide name value"
        })
    }
    else {
        let flag = false
        for (let i = 0; i < people.length; i++) {
            if (people[i].id === Number(id)) {
                people[i].name = name
                flag = true
                break
            }
        }

        if (!flag) {
            return res.status(400).json({
                success: false,
                msg: `please Insert Valid ID - ${id}`
            })
        }
        else {
            res.status(200).send({
                success: true,
                data: people
            })
        }
    }
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    console.log(person)

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )

    console.log(newPeople)

    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}