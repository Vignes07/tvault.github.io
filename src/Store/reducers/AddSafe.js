import { createSlice } from "@reduxjs/toolkit";

export const safeSlice = createSlice({
  name: "safes",
  initialState: {
    value: [],
  },
  reducers: {
    addSafe: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    updateSafe: (state, action) => {
      state.value.map((safe, index) => {
        if (safe.id === action.payload.id) {
          state.value.splice(index, 1, action.payload);
        }
      });
    },
    removeSafe: (state, action) => {
      state.value.map((safe, index) => {
        if (safe.id === action.payload.id) {
          state.value.splice(index, 1);
        }
      });
    },
    addSecret: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addSafe, removeSafe, updateSafe, addSecret } = safeSlice.actions;
export default safeSlice.reducer;
