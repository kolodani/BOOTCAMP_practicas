import React,{useState} from 'react';
import './App.css';
//Import Component
import Nav from "./components/Nav";
import Video from './components/Video';

function App() {
  // Write JavaScript code here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Hello react</h1>
      <button onClick={incrementer}>Increment</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
