import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (_, index) => index !== action.payload.id
      );
    },
  },
});

export const { add, remove } = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;
