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
import Contact from "./contact";



function Portfolio() {
  return (
    <Router>
    <div className="App">
      <AnimatedCursor 
        innerSize={8}
        outerSize={12}
        color='239, 139, 128'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
      />

      <header className="App-header">
        <div className="App-nav">        
          <Link to="/about">
            dddd
          </Link>
         
          <Link to="/portfolio">
            Portfolio
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>

    </Router>
  );
}

export default Portfolio;


//        <img className="image" src={illu} alt="Illu" />
