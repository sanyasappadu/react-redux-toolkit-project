// Layout.js
import { Outlet, Link } from "react-router-dom";
import './styles/layout.scss'
const Layout = () => {
  return (
    <div >
      <nav >
          <ul className='header'>
              <Link to="/" className='text'>Home</Link>
              <Link to="/counter" className='text'>Counter</Link>
              <Link to="/employee-creation">Employee Creation</Link>
              <Link to="/employee-list">Employee List</Link>
          </ul>
        </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
