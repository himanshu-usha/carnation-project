import React, { Component } from "react";
import Image from "../../assets/bg-pic@2x.png";
import Header from "../Header";
import "./Home.css"

const homeImageStyle = {
  background: {
    backgroundImage: `url(${Image})`,
    height: "800px",
    backgroundSize: "cover"
  }
};

class Home extends Component {
  render() {
    return (
      <div style={homeImageStyle.background}>
        <Header />
        <div>
          <h2>THE BEST FOODIE</h2>
          <h1>EXPERIENCE</h1>
          <h3>NOW IN LONDON</h3>
        </div>
      </div>
    );
  }
}

export default Home;
