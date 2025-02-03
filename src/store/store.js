import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
