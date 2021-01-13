import illu from './image.png';
import './portfolio.css';
import AnimatedCursor from "react-animated-cursor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./about";
import Contact from "./contact";



function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-nav">        
          <Link to="/about">Building Office</Link>         
          <Link to="/portfolio">Zlingit</Link>         
          <Link to="/contact">Domsjö</Link>
          <Link to="/contact">Degoo</Link>   
          <Link to="/contact">Greenie</Link>                   
        </div>
      </div> 
    </div>
  );
}

export default Portfolio;


//        <img className="image" src={illu} alt="Illu" />
