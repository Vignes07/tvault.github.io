import { createSlice } from "@reduxjs/toolkit";

export const safeSlice = createSlice({
  name: "safes",
  initialState: {
    value: [],
    curId: "",
  },
  reducers: {
    setCurId: (state, action) => {
      state.curId = action.payload;
    },
    addSafe: (state, action) => {
      state.value.push(action.payload);
    },
    updateSafe: (state, action) => {
      state.value.forEach((safe, index) => {
        if (safe.id === action.payload.id) {
          state.value.splice(index, 1, action.payload);
        }
      });
    },
    removeSafe: (state, action) => {
      state.value.forEach((safe, index) => {
        if (safe.id === action.payload.id) {
          state.value.splice(index, 1);
        }
      });
    },
    addSecret: (state, action) => {
      state.value.forEach((safe) => {
        if (safe.id === action.payload.curId) {
          safe.secret.push(action.payload.secret);
        }
      });
    },
    removeSecret: (state, action) => {
      state.value.forEach((secrets) => {
        secrets.secret.forEach((value, index) => {
          if (value === action.payload.id) {
            secrets.secret.splice(index, 1);
          }
        });
      });
    },
  },
});

export const {
  setCurId,
  addSafe,
  removeSafe,
  updateSafe,
  addSecret,
  removeSecret,
} = safeSlice.actions;
export default safeSlice.reducer;
