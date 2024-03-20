import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import '../styles/counter.scss'
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  return (
    <div className='container'>
      <button onClick={() => dispatch(decrement())} className='button'>Decrement</button>
      <h1 className='couter'>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} className='button'>Increment</button>
    </div>
  );
};
 
export default Counter; 