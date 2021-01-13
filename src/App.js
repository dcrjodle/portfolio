import illu from './image.png';
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
import Home from "./home";



function App() {
  return (
    
    <div>

      <AnimatedCursor 
        innerSize={8}
        outerSize={12}
        color='239, 139, 128'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
      />


      <Home />
      
    </div>
  );
}

export default App;


//        <img className="image" src={illu} alt="Illu" />
