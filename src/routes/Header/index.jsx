import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import logo from "../../logo.svg";

class Header extends Component {

  render() {

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="Foodie" />
        </Menu.Item>

        <Menu.Item name="about" href="/about">
          ABOUT
        </Menu.Item>

        <Menu.Item name="community" href="/community">
          COMMUNITY
        </Menu.Item>
        <Menu.Item name="location" href="/location">
          LOCATION
        </Menu.Item>
        <Menu.Item name="ourMenu" href="/ourMenu">
          OUR MENU
        </Menu.Item>
        <Menu.Item name="recipes" href="/recipes">
          RECIPES
        </Menu.Item>
        <Menu.Item name="contact" href="/contact">
          CONTACT
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
