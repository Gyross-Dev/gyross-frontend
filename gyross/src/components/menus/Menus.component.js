import React, { Component } from "react";
import Mapped from "./mapped/Mapped";

class Menus extends Component {
  state = {
    menu: null,
  };
  componentDidMount() {
    this.setState({ menu: menu });
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-wrapper">
          <h1 className="menu-title">Menu</h1>
          {this.state.menu
            ? Object.entries(this.state.menu).map(([key, val], index) => {
                return (
                  <div className="menu-box" key={index}>
                    <div className="menu-category">{key}</div>
                    <Mapped item={key} val={val} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Menus;

const menu = {
  breakfast: {
    tea: {
      price: 2,
    },
    coffee: {
      price: 1,
    },
  },
  lunch: {
    "chicken over rice": {
      price: 5,
    },
  },
  dinner: {
    "salmon over rice": {
      price: 10,
    },
    "combo over rice": {
      price: 7,
    },
  },
  soda: {
    "diet coke": {
      price: 1,
    },
    coke: {
      price: 1,
    },
    "ginger ale": {
      price: 1,
    },
    pepsi: {
      price: 1,
    },
  },
  sauce: {
    "green sauce": "",
    "hot sauce": "",
    "white sauce": "",
  },
};
