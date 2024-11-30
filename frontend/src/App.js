import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/Navbar/Navigation';
import SignUp from './Pages/SignUpPage/SignUp';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/ProductPage/Product';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>

    </div>
  );
}

export default App;
