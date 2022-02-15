import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, double, reset } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value
  // from the state.
  const count = useSelector((state) => state.counter.count);
  const currentColor = useSelector((state) => state.counter.currentColor);
  console.log('currentColor', currentColor);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="double value"
        onClick={() => {
          dispatch(double());
        }}
      >
        * 2
      </button>
      <button
        aria-label="reset value"
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
