import React from 'react';
import './App.css';
//Import Component
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
  // Write JavaScript code here
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className='home'>
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;
