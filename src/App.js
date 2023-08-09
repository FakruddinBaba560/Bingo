
import Bingo from './Components/Bingo';
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';

//Creating an array that stores the numbers from - given size

 
// Main App Function Is Started
function App() {
  let [Size, setSize] = useState(5)
  let [Level, setLevel] = useState("easy")
  let [Click,setClick]=useState(false)
  let  Size_btn=(e) =>{
    let size = parseInt(e.target.getAttribute("value"))
    console.log(size)
    setSize(size)
  }
 let Level_btn=(e)=> {
  let level = e.target.getAttribute("value")
    setLevel(level)
  }
  
   

  return (
    <>
    <Navbar Size_btn={Size_btn} Level_btn={Level_btn} setClick={setClick} />
    <Bingo Size={Size} Level={Level} Click={Click} />
    </>
  );
}

export default App;
