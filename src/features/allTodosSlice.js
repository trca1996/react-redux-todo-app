import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

const allTodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      // const item = state.allTodos.find((todo) => todo.id === action.payload);
      // state.allTodos.splice(state.allTodos.indexOf(item), 1);
      state.allTodos = state.allTodos.filter(
        (item) => item.id !== action.payload
      );
    },

    doneTodo: (state, action) => {
      // eslint-disable-next-line
      state.allTodos.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },

    deleteAllTodos: (state) => {
      state.allTodos = state.allTodos.filter((item) => item.done === false);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  doneTodo,
  deleteAllTodos,
} = allTodosSlice.actions;

export default allTodosSlice.reducer;
