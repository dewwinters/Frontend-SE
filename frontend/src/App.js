import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import SignUp from './Pages/SignUpPage/SignUp';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/ProductPage/Product';
import SearchResult from "./Pages/SearchResult/SearchResult"
import Item from "./Pages/ItemPage/Item"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SearchResult' element={<SearchResult/>}/>       
        <Route path='/Item/:id' element={<Item/>}/> 
      </Routes>
    </div>
  );
}

export default App;
