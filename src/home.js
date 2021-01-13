import illu from './image.png';
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";



function Home() {
  return (
    
    <div className="App">
      <div className="App-header">
        <div className="App-nav">        
          <Link to="/about">About</Link>         
          <Link to="/portfolio">Portfolio</Link>         
          <Link to="/contact">Contact</Link>         
        </div>
      </div> 
    </div>
  );
}

export default Home;


//        <img className="image" src={illu} alt="Illu" />
