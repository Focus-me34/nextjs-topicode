"use client";

import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.value);

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <br />
      <br />
      <h2 style={{ marginBottom: 16, fontSize: "3rem" }}>Redux counter --&gt; {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        style={{ fontSize: "2rem" }}
      >
        increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginInline: 64, fontSize: "2rem" }}
      >
        decrement
      </button>
      <button onClick={() => dispatch(reset())} style={{ fontSize: "2rem" }}>
        reset
      </button>
    </div>
  );
}

export default Counter;
