// employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';
 
const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
  },
});
 
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;