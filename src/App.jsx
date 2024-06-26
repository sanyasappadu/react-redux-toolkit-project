// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Counter from './components/Counter'
import EmployeeCreation from './components/EmployeeCreation';
import EmployeeList from './components/EmployeeList';
import UserUpdated from './components/UserUpdated';
import UserEdit from './components/UserEdit';
import UserSignup from './components/UserSignup';
import Home from './components/Home';
import Layout from './Layout';
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/employee-creation" element={<EmployeeCreation/>} />
          <Route path="/employee-list" element={<EmployeeList/>} />
          <Route path="/userSignup" element={<UserSignup/>} />
          <Route path="/useredit" element={<UserEdit/>} />
          <Route path="/userupdated" element={<UserUpdated/>} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;