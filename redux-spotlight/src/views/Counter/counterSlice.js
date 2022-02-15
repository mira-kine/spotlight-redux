import { createSlice } from '@reduxjs/toolkit';
const pinkRGB = 'rgb(52, 211, 153)';

function getColor(count) {
  if (count === 0) {
    return pinkRGB;
  }

  if (count > 0) {
    return 'rgb(52, 211, 153)';
  }

  if (count < 0) {
    return 'rgb(239, 68, 68)';
  }

  return pinkRGB;
}

const initialState = {
  count: 0,
  currentColor: pinkRGB,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure immutable data

      //This is describing the mutation to the state
      state.count += 1;
      state.currentColor = getColor(state.count + 1);
    },
    decrement: (state) => {
      state.count -= 1;
      state.currentColor = getColor(state.count - 1);
    },
    double: (state) => {
      state.count = (state.count + 1) * 2;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, double, reset } = counterSlice.actions;

//Export the reducer function from the slice
export default counterSlice.reducer;
