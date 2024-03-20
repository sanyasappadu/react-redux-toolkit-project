import { useSelector } from 'react-redux';
 
const EmployeeList = () => {
  // Retrieve employee data from Redux store
  const employees = useSelector((state) => state.employee.list);
 
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
        <li id={employee.id}>
          {`${employee.id}: ${employee.name} : ${employee.age}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default EmployeeList;