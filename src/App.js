import Navbar from './Components/navbar.js';
import './App.css';
import { Form, Product } from './Components/product.js';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      {/* <Cards/> */}
      <Product/>
    </div>
  );
}

export default App;
