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



function App() {
  return (
    
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
          <a>About</a>         
          <a>Portfolio</a>
          <a>Contact</a>
        </div>
      </header> 
    </div>
  );
}

export default App;


//        <img className="image" src={illu} alt="Illu" />
