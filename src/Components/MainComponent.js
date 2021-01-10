import React, { Component } from 'react';

import Design from './design';
import Web from './web';
import { Switch, Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from "./Header";
import Footer from "./Footer"









class Main extends Component{
  constructor(props){
   super(props);
   this.state={

   }
}
   render() {
       return(
      <div style={{backgroundColor:'#191919'}}>
        
      <Header />
      <br />
      <br />
      <Web />
      <Design />
      <Footer />
      
      
      
      
      </div> 
       )
   }
  

}

export default Main;