import React from 'react';
import './App.scss';
import Navbar from './Components/navbar'
import Slideshow from './Components/slideshow'
import Recommended from './Components/recommended'
import TopMusic from './Components/topMusic'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <div className="recommended-topmusic">
        <Recommended></Recommended>
        <TopMusic></TopMusic>
      </div>
    </div>
  );
}

export default App;
