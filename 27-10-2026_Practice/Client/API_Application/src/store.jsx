import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// The key "counter" decides where the slice lives in the state:
// state.counter.count
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});