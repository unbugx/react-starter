import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// store
import { increase, decrease, reset } from 'store/slices/counter'

// types
import type { CounterProps } from 'components/pages/Home/Counter/Counter.types'

export const Counter: FC<CounterProps> = () => {
  const counter = useSelector((state: State) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div>
      Counter: <b>{counter}</b>
      <div>
        <button type="button" onClick={() => dispatch(increase())}>
          +1
        </button>
        <button type="button" onClick={() => dispatch(decrease())}>
          -1
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
    </div>
  )
}
