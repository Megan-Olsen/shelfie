import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: "",
    };
  }
  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  }
  handlePrice(e) {
    e.preventDefault();
    this.setState({
      price: e.target.value,
    });
  }
  handleImgurl(e) {
    e.preventDefault();
    this.setState({
      imgurl: e.target.value,
    });
  }
  handleCancel(e) {
    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    });
  }

  render() {
    return (
      <form>
        <div>Form</div>
        <div>Image URL:</div>
        <input
          value={this.state.imgurl}
          onChange={this.handleImgurl.bind(this)}
        />
        <div>Product Name:</div>
        <input value={this.state.name} onChange={this.handleName.bind(this)} />
        <div>Price:</div>
        <input
          value={this.state.price}
          onChange={this.handlePrice.bind(this)}
        />
        <div>
          <button name="cancel" value="cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <button name="addToInventory" onClick={this.handleAdd}>
            Add to Inventory
          </button>
        </div>
      </form>
    );
  }
}
