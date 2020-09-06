import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }
  componentDidMount(){
    axios.get('/api/inventory').then((res) =>{
      this.setState({
        inventory: res.data
      })
    })
  }




  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}
