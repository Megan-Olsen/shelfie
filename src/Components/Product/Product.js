import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.data.image_url} alt='error'/>
        <p>{this.props.data.name}</p>
        <p>$ {this.props.data.price}</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}
