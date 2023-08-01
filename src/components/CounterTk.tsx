import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../store-tk'
import { decrement, increment } from '../store-tk/counter/counterSlice'

export function CounterTk() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}