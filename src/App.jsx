// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Counter from './components/Counter'
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
          <Route path='*' element={<PageNotFound />} />
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;