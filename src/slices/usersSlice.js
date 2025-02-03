import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  number: 0,
  count: 10,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addNumber: (state) => {
      state.number += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});
export const { addUser, addNumber, decreaseCount } = usersSlice.actions;
export default usersSlice.reducer;
