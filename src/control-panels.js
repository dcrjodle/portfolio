import illu from './image.png';
import './App.css';
import AnimatedCursor from "react-animated-cursor"


function controlPanels() {
  return (
    <div className="App">
      <AnimatedCursor 
        innerSize={8}
        outerSize={12}
        color='239, 139, 128'
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={8}
      />
      <header className="App-header">
        <div className="App-nav">        
          <a>
            About
          </a>
          <a>
            Portfolio
          </a>
          <a>
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}

export default controlPanels;


//        <img className="image" src={illu} alt="Illu" />
