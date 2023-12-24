// * Created he schema.
const Task = require('..\\models\\task_models')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }
    catch (err) {
        res.json({ message: err })
    }
}

// * for creating new Task
// const createTask = (req, res) => {
//     res.json(res.send(req.body))
// }
// * Outcome: 
// {
//     "task": {
//         "name": "MalaniPrince",
//         "completed": true,
//         "_id": "6587c84a9477d88b5e4fab92",
//         "__v": 0
//     }
// }
const createTask = async (req, res) => {
    // in request you will pass multiple values it also fine.
    try {
        const task = await Task.create(req.body)
        res.status(200).json({ task })
    }
    catch (err) {
        // server error
        res.status(500).json({
            message: err
        })
    }
}


// * how to get id from the path parameters.
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            res.status(404).json({
                message: `no Task with id = ${taskID}`
            })
        }
        res.status(200).json({
            task
        })
    }
    catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

const updateTask = (req, res) => {
    res.send("Update Task")
}

const deleteTask = (req, res) => {
    res.send("Delete Task")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}  