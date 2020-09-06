import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.data.imgUrl} alt='error'/>
        <p>{this.props.data.name}</p>
        <p>{this.props.data.price}</p>
      </div>
    );
  }
}
