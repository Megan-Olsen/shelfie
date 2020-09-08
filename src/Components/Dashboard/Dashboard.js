import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props){
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
  }


  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => console.log('This be broken!'));
  };


  render() {
    return (
      <div>
        {this.props.inventory.map((element) => {
          return <Product 
                    key={element.id} 
                    data={element} 
                    deleteProduct={this.deleteProduct}/>;
        })}
      </div>
    );
  }
}
// key={element.id} data={element}
