import React, { Component } from "react";
import './App.css';
import Nav from './components/Nav';
import ImgCards from './components/ImgCards';
import Jumbotron from './components/Jumbotron';

import imgs from "./images.json";


class App extends Component {
  state = {
    imgs
  };

  render() {
    return (
      <div>
          <Nav />
          <Jumbotron />
          
          {this.state.imgs.map(img => ( 
          <ImgCards 
            image={img.image}/>
            ))};
      </div>
    );
  }
}


export default App;
