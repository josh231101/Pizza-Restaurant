import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Features from "./components/Features";
import Footer from "./components/Footer";
const App = ()=> {
  return (
    <Router className="App">
      <GlobalStyle/>
      <Hero/>
      <Products id="pizza" heading='Choose your favorite' data={productData}/>
      <Features/>
      <Products id="desserts" heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
