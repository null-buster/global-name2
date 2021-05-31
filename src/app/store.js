import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/name/nameSlice';
import { createStore, applyMiddleware } from 'redux';


const loggingMiddleware = (store) => (next) => (action) => {
  // Our middleware
  // window.alert(`[Middleware]:action`, store)
  window.alert(`[Middleware]:action`)
  // call the next function
  next(action);
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer
  },
  middleware : [
    loggingMiddleware
  ]
});


// const loggingMiddleware = (store) => (next) => (action) => {
//   // Our middleware
//   alert(`Redux Log:`, action)
//   // call the next function
//   next(action);
// }