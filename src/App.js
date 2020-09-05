import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: [
        {name: "the great stuff", imgurl: "tacossldkjfiong", price: 99.99}, 
        {name: "see the things", umgurl: "what!", price: 666}
      ]
    }
  }
    
  render(){
    return (
      <div>
        <Header />
        <Dashboard 
        inventory={this.state.inventory}/>
        <Form />  
      </div>
    )
  }
}