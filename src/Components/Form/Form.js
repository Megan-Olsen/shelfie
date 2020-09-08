import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      image_url: "",
    };
    this.handleCancel=this.handleCancel.bind(this)
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
      image_url: e.target.value,
    });
  }
  handleCancel(e) {
    this.setState({
      name: "",
      price: 0,
      image_url: "",
    });
    // this.getInventory = this.getInventory.bind(this)
  }
  OnSubmit = e => {
    e.preventDefault();
    const { name, price, image_url } = this.state;
    const { getInventory } = this.props;
    // const product = { name, price, img };

    axios.post('/api/product', { name, price, image_url }).then(res => {
      this.setState({
        inventory: res.data,
      });
      getInventory();
      this.handleCancel();
    }); 
  }

  render() {
    return (
      <form>
        <div>Form</div>
        <div>Image URL:</div>
        <input
          value={this.state.image_url}
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
          <button name="addToInventory" onClick={this.OnSubmit}>
            Add to Inventory
          </button>
        </div>
      </form>
    );
  }
}
