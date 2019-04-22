import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ImgCards from './components/ImgCards';
import Jumbotron from './components/Jumbotron';


function App () {
    return (
      <div>
          <Nav />
          <Jumbotron />
          <ImgCards />
      </div>
    );
  }


export default App;
