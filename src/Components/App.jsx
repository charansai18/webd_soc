import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import  Home  from "./home";
import Events from "./events"
import Showcase from "./showcase"

export default class App extends Component {
  
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Home}/>  
            <Route exact path='/Events' component={Events}/>
            <Route exact path='/Showcase' component={Showcase}/>
          </div>
        </BrowserRouter>
    )
  }
}