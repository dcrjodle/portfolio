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

      <AnimatedCursor 
        innerSize={8}
        outerSize={12}
        color='239, 139, 128'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
      />
      
      <div className="portfolio-header">
        <div className="portfolio-nav">        
          <Link to="/about">Building Office</Link>         
          <Link to="/portfolio">Zlingit</Link>         
          <Link to="/contact">Domsjö</Link>
          <Link to="/contact">Degoo</Link>   
          <Link to="/contact">Greenie</Link>                   
        </div>
      </div> 

      <div>
        <h1>Title</h1>
        <p>Bread text I guess this is unstyled</p>
      </div>

    </div>
  );
}

export default Portfolio;


//        <img className="image" src={illu} alt="Illu" />
