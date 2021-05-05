import { configureStore } from "@reduxjs/toolkit";
import allTodosReducer from "../features/allTodosSlice";

export const store = configureStore({
  reducer: {
    allTodos: allTodosReducer,
  },
});
