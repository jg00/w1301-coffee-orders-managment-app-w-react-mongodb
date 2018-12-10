import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">All Orders</Link>
          </li>
          <li>
            <Link to="/addcoffee">Add Coffee Order</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
