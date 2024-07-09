import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push({
        id: state.value.length,
        text: action.payload,
        read: false,
        important: false,
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
    toggle: (state, action) => {
      const todo = state.value.find((_, index) => index === action.payload.id);
      if (todo) {
        todo.read = !todo.read;
      }
    },
    toggleImportant: (state, action) => {
      const todo = state.value.find((_, index) => index === action.payload.id);
      if (todo) {
        todo.important = !todo.important;
      }
    },
    markAllAsRead: (state) => {
      state.value.forEach((todo) => {
        todo.read = true;
      });
    },
    markAllUnread: (state) => {
      state.value.forEach((todo) => {
        todo.read = false;
      });
    },
  },
});

export const {
  add,
  remove,
  toggle,
  markAllAsRead,
  toggleImportant,
  markAllUnread,
} = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;
