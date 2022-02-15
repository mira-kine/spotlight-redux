import { createSlice } from '@reduxjs/toolkit';
const pinkRGB = 'rgb(52, 211, 153)';

const initialState = {
  count: 0,
  color: pinkRGB,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure immutable data

      //This is describing the mutation to the state
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    double: (state) => {
      state.count = (state.count + 1) * 2;
    },
    reset: (state) => {
      state.count = 0;
    },
    // changeColor: (state) => {
    //   state.count >= 10;
    // },
  },
});

export const { increment, decrement, double, reset, changeColor } =
  counterSlice.actions;

//Export the reducer function from the slice
export default counterSlice.reducer;
