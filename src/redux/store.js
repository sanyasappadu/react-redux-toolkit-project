// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import employeeReducer from './employeeSlice';
import userReducer from './userSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    employee: employeeReducer,
    user: userReducer,
  },
});
 
export default store;