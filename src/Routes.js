import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import App from "./App";
  

export default class Routes extends Component {
    render() {
      return (
        <Switch>
          
          <Route
            exact
            path='/portfolio'
            component={Portfolio}
          />
          <Route
            exact
            path='/about'
            component={About}
          />
          <Route
            exact
            path='/contact'
            component={Contact}
          />
          <Route
            exact
            path='/home'
            component={App}
          />
        </Switch>
      );
    }
  }