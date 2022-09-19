import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/state/counter/counterSlice";
import { decrement } from "../../redux/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-info">
        <h2>My counter App</h2>
      </div>
      <div className="card-body">
        <h1>{count}</h1>
        <div className="my-4">
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-danger me-2"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
