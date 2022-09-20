import { configureStore } from "@reduxjs/toolkit";
import safeReducer from "./reducers/AddSafe";

const store = configureStore({
  reducer: {
    safes: safeReducer,
  },
});

export default store;
