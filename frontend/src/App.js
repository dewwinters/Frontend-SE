import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import NavBar from './Components/Navbar/Navigation';
import SignUp from './Pages/SignUpPage/SignUp';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/ProductPage/Product';
import Cart from './Pages/CartPage/Cart';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='Cart' element={<Cart/>}/>
      </Routes> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;
