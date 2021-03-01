import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
const App = ()=> {
  return (
    <Router className="App">
      <GlobalStyle/>
      <Hero/>
    </Router>
  );
}

export default App;
