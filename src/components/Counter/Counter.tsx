import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// slices
import { increase } from 'redux/slices/counter';

// types
import { ICounterProps } from './types';

export const Counter: FC<ICounterProps> = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      Counter: <b>{counter}</b>
      <div>
        <button type='button' onClick={() => dispatch(increase())}>+1</button>
        <button type='button'>-1</button>
        <button type='button'>reset</button>
      </div>
    </div>
  );
};
