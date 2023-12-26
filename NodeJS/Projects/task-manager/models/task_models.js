// const mongoose = require('mongoose')

// // * structure for Data
// const taskSchema = new mongoose.Schema({
//     // name: String,
//     // * specifies the input functionality for mongo [What type of data should be passes]

//     name: {
//         type: String,
//         required: [true, 'must provide name'],

//         // trim is use for the remove the white space from the entered text.
//         trim: true,

//         maxlength: [20, 'name can not be more than 20 characters']
//     },

//     // completed: Boolean
//     complete: {
//         type: Boolean,

//         // If we did not pass the completed value in the input is set false by default.
//         default: false,
//     }
// })

// // * for export the functionality...
// module.exports = mongoose.model(
//     "Task",
//     taskSchema
// )


const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)