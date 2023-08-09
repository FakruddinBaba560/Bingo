import { useEffect, useState } from "react";
import Song from '../Audio/BgAdiuo.mp3'
export default function Navbar(props) {
  const song = new Audio(Song)
  song.loop=true

  let [Menu, setMenu] = useState(false)//Checking if the menu icon is clicked or not

  // Hover function => changing the class name when the elements are hovered it visibles the their child options 
  const Hover = (element, ele_op) => {
    let ele_options = document.getElementById(ele_op);//Accessing the child options
    let ele = document.getElementById(element)//Accessing the parent element

    const handleMouseOver = () => {
      ele_options.classList.remove('hide')
      ele_options.classList.add('visible')
    };
    const handleMouseOut = () => {
      ele_options.classList.remove('visible')
      ele_options.classList.add('hide')
    };
    ele.addEventListener("mouseover", handleMouseOver);
    ele.addEventListener("mouseout", handleMouseOut);
  }

  //useEffect => executes when the component is mount it access the options and add the hover effect
  useEffect(() => {
    Hover("size", "size_options");//Size options 
    Hover("level", "level_options");//Level options
    Hover("sound", "sound_options");//Sound options
  
  }, [])

  //Hide function executes when the child option is selected then the child options became hide
  const Hide = (e, child_op, StateCh) => {
    let ch_op = document.getElementById(child_op);
    StateCh && StateCh(e);
    ch_op.classList.add('hide')
    ch_op.classList.remove('visible')
  }
  let sizeoptions = (e) => {//Hiding the  size child options when the option is clicked
    Hide(e, "size_options", props.Size_btn)
  }
  let leveloptions = (e) => {//Hiding the  level child options when the option is clicked
    Hide(e, "level_options", props.Level_btn)

  }
  let menuClick = () => {//Changing the menu icon based on the visibility of main options when the web site is in phone
    const options = document.querySelector(".options")
    options.style.display === "flex" ? options.style.display = "none" : options.style.display = "flex"
    options.style.display === "flex" ? setMenu(true) : setMenu(false)
  }

  let soundoptions = (e) => {
 
    Hide(e, "sound_options", null)

  }
  // document.addEventListener('click',(e)=>{
  //   if(Menu){
  //     menuClick();
  //   }
  // })
  
 

  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="Logo"><span>BINGO</span></div>
          <ul className="options">
            <li>
              <a href="https://fakruddinbaba560.github.io/Bingo/">Home</a>
            </li>
            <li id="size" >
              Size <i className="fa-solid fa-caret-down"></i>
              <ul className='hide' id="size_options" onClick={sizeoptions} >
                <li value={5}>5</li>
                <li value={6}>6</li>
                <li value={7}>7</li>
              </ul>
            </li>
            <li id="level" >
              Level <i className="fa-solid fa-caret-down"></i>
              <ul className='hide' id="level_options" onClick={leveloptions}>
                <li value={"easy"}>Easy</li>
                <li value={"hard"}>Hard</li>
              </ul>
            </li>
            <li>
              <a href="https://fakruddinbaba560.github.io/Bingo/">About</a>
            </li>
            <li id="sound" >
              Sound <i className="fa-solid fa-caret-down"></i>
              <ul className='hide' id="sound_options" onClick={soundoptions}>
                <label htmlFor="Click"> <li>  Click :  <input type="checkbox" id="Click"  onChange={(e) => {

                  
                  e.target.checked ?props.setClick(true) :props.setClick(false)
                }}></input></li></label>
                <label htmlFor="Music"> <li>  Music :  <input type="checkbox" id="Music"  onChange={(e) => {

                  // const Music = document.getElementById("Music")
                  e.target.checked ? song.play(): song.pause();
                }}></input></li></label>
              </ul>
            </li>

          </ul>
          <span className="menu-icon" onClick={() => {
            menuClick();
          }}>
            <button>
            {
              Menu ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>
            }
            </button>
          </span>
        </div>
      </nav>
    </header>
  );
}
