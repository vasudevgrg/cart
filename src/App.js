import Navbar from './Components/navbar.js';
import './App.css';
import { Form, Product } from './Components/product.js';
import { ListItems } from './Components/ListItems.js';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Product/>
      {/* <ListItems/> */}
    </div>
  );
}

export default App;
