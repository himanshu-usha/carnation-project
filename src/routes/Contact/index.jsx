import React from "react";
import Image from "../../assets/bg-detail@2x.png";

const starImage = {
  background: {
    backgroundImage: `url(${Image})`,
    height: "50px",
    width : '20%',
    backgroundSize: "cover"
  }
};

class Contact extends React.Component {
  render() {
    return (
      <div>
        <span>
          <h1>COLLABORATE WITH US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
        </span>
        <span>
          <div style={starImage.background}>

          </div>
          <form>

          </form>
        </span>
      </div>
    );
  }
}
export default Contact;
