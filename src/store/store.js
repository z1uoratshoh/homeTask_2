import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "../reducers/todo/todoSlice"

export const store = configureStore({
  reducer: {
    todoList : todoSlice
  },
})