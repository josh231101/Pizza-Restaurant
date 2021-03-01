import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import Features from "./components/Features";
const App = ()=> {
  return (
    <Router className="App">
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Features/>

    </Router>
  );
}

export default App;
