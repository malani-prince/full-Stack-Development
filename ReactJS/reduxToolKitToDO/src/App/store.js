
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/ToDo/todoSlice"

// Add Store
export const store = configureStore({
    reducer: todoReducer
})
