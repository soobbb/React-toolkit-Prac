import "./App.css";
import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import store from "./redux-toolkit/store/store";
import { up, down } from "./redux-toolkit/counterSlice/counterSlice";
import { fetchCounter } from "./redux-toolkit/counterActions/counterActions";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(up(1));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(down(1));
          }}
        >
          -
        </button>
        {count}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
