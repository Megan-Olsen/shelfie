import React, { Component } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentSelectedProduct: {}
    }


    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory').then(response => {
      console.log(response)
      this.setState({ inventory: response.data })
    }).catch(error => alert(error, "All the stuff is missing."))
  }

  updateProduct = (product) => {
    this.setState({ currentSelectedProduct: product })
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getInventory={this.getInventory}
          updateProduct={this.updateProduct}
        />
        <Form
          getInventory={this.getInventory}
          currentSelectedProduct={this.state.currentSelectedProduct}
        />
      </div>
    )
  }
}

export default App