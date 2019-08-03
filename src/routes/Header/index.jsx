import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import logo from "../../logo.svg";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="Foodie" />
        </Menu.Item>

        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
          href="/about"
        >
          ABOUT
        </Menu.Item>

        <Menu.Item
          name="community"
          active={activeItem === "community"}
          onClick={this.handleItemClick}
          href="/community"
        >
          COMMUNITY
        </Menu.Item>
        <Menu.Item
          name="location"
          active={activeItem === "location"}
          onClick={this.handleItemClick}
          href="/location"
        >
          LOCATION
        </Menu.Item>
        <Menu.Item
          name="ourMenu"
          active={activeItem === "ourMenu"}
          onClick={this.handleItemClick}
          href="/ourMenu"
        >
          OUR MENU
        </Menu.Item>
        <Menu.Item
          name="recipes"
          active={activeItem === "recipes"}
          onClick={this.handleItemClick}
          href="/recipes"
        >
          RECIPES
        </Menu.Item>
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
          href="/contact"
        >
          CONTACT
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
