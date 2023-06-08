import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice/counterSlice";
// import { thunkMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
