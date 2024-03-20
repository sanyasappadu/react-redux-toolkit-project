import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../redux/userSlice';

const UserEdit = () => {
  const currentUser = useSelector((state) => state.user);
  const [name, setName] = useState(currentUser.name);
  const [age, setAge] = useState(currentUser.age);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [address, setAddress] = useState(currentUser.addresses[0] || '');
  const [gender, setGender] = useState(currentUser.gender);
  const [friend, setFriend] = useState(currentUser.friends[0] || '');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      updateUser({
        name,
        age,
        phoneNumber,
        addresses: [address],
        gender,
        friends: [friend],
      })
    );

    // Update data in sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('age', age);
    sessionStorage.setItem('phoneNumber', phoneNumber);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('friend', friend);
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))} placeholder="Age" />
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
      <input type="text" value={friend} onChange={(e) => setFriend(e.target.value)} placeholder="Friend" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserEdit;
