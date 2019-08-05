import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import { TITLES } from "./constants/mesages";
import Home from "./routes/Home";
import "./App.css";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Community from "./routes/Community";
import Location from "./routes/Location";
import OurMenu from "./routes/OurMenu";
import Recipes from "./routes/Recipes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      section: "Home"
    };
  }
  onEnterViewport = section => {
    this.setState({
      section: section
    });
  };

  // onExitViewport = section => {
  //   this.setState({
  //     section: section
  //   });
  // };

  render() {
    const { section } = this.state;
    console.log(section);
    return (
      <div>
        <Router>
          <div>
            <ScrollTrigger
              onEnter={() => this.onEnterViewport(TITLES.MENU.HOME)}
            >
              <Home />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.ABOUT)}>
              <About />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.COMMUNITY)}>
              <Community />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.LOCATION)}>
              <Location />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.OUR_MENU)}>
              <OurMenu />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.RECIPES)}>
              <Recipes />
            </ScrollTrigger>
            <hr />
            <ScrollTrigger onEnter={() => this.onEnterViewport(TITLES.MENU.CONTACT)}>
              <Contact />
            </ScrollTrigger>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
