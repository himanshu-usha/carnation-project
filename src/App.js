import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";

import "./App.css";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Community from "./routes/Community";
import Location from "./routes/Location";
import OurMenu from "./routes/OurMenu";
import Recipes from "./routes/Recipes";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Home />
            <hr />
            <About />
            <hr />
            <Community />
            <hr />
            <Location />
            <hr />
            <OurMenu />
            <hr />
            <Recipes />
            <hr />
            <Contact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
