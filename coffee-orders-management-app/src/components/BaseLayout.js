import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import AddCoffee from "./AddCoffee";
import AllOrders from "./AllOrders";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu>Menu</Menu>
        <Switch>
          <Route exact path="/" component={AllOrders} />
          <Route path="/addcoffee" component={AddCoffee} />
        </Switch>
      </div>
    );
  }
}

export default BaseLayout;
