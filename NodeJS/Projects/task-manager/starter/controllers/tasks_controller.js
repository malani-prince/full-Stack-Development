// * Created he schema.
const Task = require('..\\models\\task_models')
const asyncWrapper = require('..\\middleware\\async')
const { createCustomError } = require('..\\errors\\custome-error')

// * Get All Task.
const getAllTasks = asyncWrapper(
    async (req, res) => {
        const tasks = await Task.find({})
        res
            .status(200)
            .json({
                status: "success",
                dat: {
                    tasks,
                    nbHits: tasks.length
                }
            })
    }
)

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
const createTask = asyncWrapper(
    async (req, res) => {
        // in request you will pass multiple values it also fine.
        const task = await Task.create(req.body)
        res.status(200).json({ task })
    }
)

// * fetch single id
// how to get id from the path parameters.
const getTask = asyncWrapper(
    async (req, res, next) => {
        const { id: taskID } = req.params

        const fetchTask = await Task.findOne({
            _id: taskID
        })

        if (!fetchTask) {
            return next(createCustomError(`no task with id ${taskID}`))
        }
        res.status(200).json({ fetchTask })
    }
)

// * Update Task.
const updateTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            return next(createCustomError(`no task with id ${taskID}`))
        }

        res.status(200).json({ task })
    }
)

// * Delete Task 
const deleteTask = asyncWrapper(
    async (req, res) => {
        const { id: taskID } = req.params

        const fetchTask = await Task.findOneAndDelete({
            _id: taskID
        })

        if (!fetchTask) {
            return next(createCustomError(`no task with id ${taskID}`))
        }
        res.status(200).json({ fetchTask })
    }
)


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}  