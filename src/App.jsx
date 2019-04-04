import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar2 from './components/navbar2';
import Carrousel from './components/Carrousel';
import Travel from './components/Travel';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <Navbar2 /> */}
            {/* <Carrousel /> */}
            <Travel />
            {/* <Switch>
              <Route path="/about" component={About} ></Route>
              <Route path="/contact" component={Contact} ></Route>
              <Route component={Home} ></Route>
            </Switch>
            <Footer /> */}
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
