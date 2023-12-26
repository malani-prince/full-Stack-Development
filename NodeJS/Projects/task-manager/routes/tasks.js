// =========> Working Flow: 
// function call form "..//controllers//tasks" | get method fetch the data | router display data on web | router connect with app.js | app.use method use for the route access from ".//routes//task.js" file

// * Total Routes
// app.get('/api/v1/tasks')        - get all the task        
// app.post('/api/v1/tasks')       - create a new Task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task


const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('..\\controllers\\tasks_controller')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router