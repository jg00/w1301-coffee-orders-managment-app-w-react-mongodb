import React, { Component } from "react";
import axios from "axios";
const ADD_ORDER_URL = "http://localhost:3001/api/orders/add";

class AddCoffee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {
        name: "",
        coffeeType: ""
      }
    };
  }

  handleTextBoxOnChange = e => {
    // console.log(e.currentTarget.name);

    this.setState({
      order: {
        ...this.state.order,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  handleAddOrderButtonClick = () => {
    // console.log("button");

    console.log("blah", this.state.order);
    let order = this.state.order;

    axios
      .post(ADD_ORDER_URL, order)
      .then(response => {
        console.log(response);
      })
      .catch(rejected => {
        console.log("Add order connection error: ", rejected);
      });
  };

  render() {
    return (
      <div>
        <h4>Add Coffee</h4>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          onChange={this.handleTextBoxOnChange}
        />
        <input
          type="text"
          name="coffeeType"
          placeholder="Type Of Coffee"
          onChange={this.handleTextBoxOnChange}
        />
        <button onClick={this.handleAddOrderButtonClick}>Place Order</button>
      </div>
    );
  }
}

export default AddCoffee;

// name, order date, type of coffee, email of the user
