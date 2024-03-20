
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
 
const EmployeeCreation = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
 
  const handleCreateEmployee = () => {
    // Dispatch action to add employee to the Redux store
    dispatch(addEmployee({ id: employeeId, name: employeeName, age:age }));
 
    // Clear input fields after creating employee
    setEmployeeId('');
    setEmployeeName('');
    setAge();
  };
 
  return (
    <div>
      <h1>Employee Creation</h1>
      <label>
        Employee ID:
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      </label>
      <br />
      <label>
        Employee Name:
        <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreateEmployee}>Create Employee</button>
    </div>
  );
};
 
export default EmployeeCreation;