import { createContext, useContext } from "react"

// * after this many step 

export const TodoContext = createContext({
    // * Define methods and functionalities
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

// Export hook that contain the context and its provider
// * simple method
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider