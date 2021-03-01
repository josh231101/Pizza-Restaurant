import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
const App = ()=> {
  return (
    <Router className="App">
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
