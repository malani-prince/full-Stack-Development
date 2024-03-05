// // nanoid generate unique id for the new object
// import { createSlice, nanoid } from "@reduxjs/toolkit"

// // we will put it inside the createSlice Method
// const initialState = {
//     todos: [{ id: 1, text: "Hello World" }]
// }

// export const todoSlice = createSlice({
//     name: "todo",
//     // Declare the initial State Value inside the createSlice Method
//     initialState,

//     // Initialize the reducers
//     // we always have 2 parameter called state and action when we call any reducer method
//     // * state  => access all the value of current state
//     // * Action => id or anything is require for so something like update or remove
//     // *        => pass the data.
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(),
//                 text: action.payload.text
//             }
//             // * todos is initialize in above initialState method
//             state.todos.push(todo)
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//         }
//     }
// })

// // Export Individual functionality 
// export const { addTodo, removeTodo } = todoSlice.actions

// export default todoSlice.reducer

// UseSelector => select any Particular Value in the Data
// useDispatcher => Modify the store

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer