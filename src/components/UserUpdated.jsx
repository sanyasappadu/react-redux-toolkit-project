
// UserUpdated.js
import { useSelector } from 'react-redux';

const UserUpdated = () => {
  const { name, age, phoneNumber, addresses, gender, friends } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Updated User Info</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Addresses: {addresses}</p>
      <p>Gender: {gender}</p>
      <p>Friends: {friends}</p>
    </div>
  );
};

export default UserUpdated;