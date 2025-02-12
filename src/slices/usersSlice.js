import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  count: 10,
};

const usersSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addNumber: (state) => {
      state.number += 1;
    },
    decreaseCount: (state) => {
      state.number -= 1;
    },
    reset: (state) => {
      state.number = 0;
    },
  },
});
export const { addNumber, decreaseCount, reset } = usersSlice.actions;
export default usersSlice.reducer;
