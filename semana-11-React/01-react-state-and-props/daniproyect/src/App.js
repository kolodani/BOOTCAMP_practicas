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
      <Nav toggle={toggle}/>
      <Video nr={counter} setToggle={toggler}/>
    </div>
  );
}

export default App;
