// Redux ToolKit

// 
/** 
//  * 1. Install Redux Library :  
//                           npm install @reduxjs/toolkit
//                           npm install react-redux
//  
//  *  2. Create Folder Inside "src" Called "app".
 * 
//  *  3. create file inside "app" Folder called "store.js"
 * 
//  *  4. Write the Content inside the Store.js

import { configureStore } from "@reduxjs/toolkit"
// Add Store
export const store = configureStore({

})

//  *  5. now create new folder called "feature" inside src
 * 
//  *  6. create new file called todoSlice.js inside the feature.
 * 

//  *  now inside the todoSlice.js initialize the functionality
// ----------------------------------------------------------------------------------
// nanoid generate unique id for the new object
import { createSlice, nanoid } from "@reduxjs/toolkit"

// we will put it inside the createSlice Method
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: "todo",
    // Declare the initial State Value inside the createSlice Method
    initialState,
    
    // Initialize the reducers
    // we always have 2 parameter called state and action when we call any reducer method
    // * state  => access all the value of current state
    // * Action => id or anything is require for so something like update or remove
    // *        => pass the data.
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            // * todos is initialize in above initialState method
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export 
// ----------------------------------------------------------------------------------


* 
* 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

*/