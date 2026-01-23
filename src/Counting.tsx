import { useDispatch, useSelector } from "react-redux"

import type { RootState } from "./store"
import { dec, inc } from "./store/counter"

function Counting() {
  const dispatch = useDispatch()

  const value = useSelector(
    (state: RootState) => state.counter.value
  )

  return (
    <div>
      <h1>{value}</h1>


      <button onClick={
        () => {
          dispatch(inc());
        }
      }>
        +++
      </button>

      <button onClick={
        () => {
          dispatch(dec());
        }
      }>
        ---
      </button>
    </div>
  )
}

export default Counting
