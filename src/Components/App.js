import React from 'react';
import '../App.scss';
import Navbar from './navbar/navbar'
import Slideshow from './slideshow/slideshow'
import Recommended from './recommended/recommended'
import TopMusic from './topMusic/topMusic'
import Trending from './trending/trending'
import Api from './Api'

function App() {
  return (
    <div className="App">
      <Api></Api>
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <div className="recommended-topmusic">
        <div className="left-pane">
          <Recommended></Recommended>
          <Trending></Trending>
        </div>        
        <TopMusic></TopMusic>
      </div>
    </div>
  );
}

export default App;
