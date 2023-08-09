
import { useEffect, useState } from 'react';
import '../App.css';
import Table from './Table';
import Button from '../Audio/BgButton.wav'
//Creating an array that stores the numbers from - given size
export function createSequentialArray(size) {
  var sequentialArray = [];

  for (var i = 0; i < size; i++) {
    sequentialArray.push(i); // Add the current number to the array
  }

  return sequentialArray;
}


// Picking a Random Number From 0-props.Size

function pickRandomIndexes(array, count) {
  const copyArray = [...array];//Copying The Array Argument
  const randomIndexes = [];//Creating A New Array For Storing THe Random Values
  while (randomIndexes.length < count && copyArray.length > 0) {//Checking the loop  i.e less then the count argument and less than the length of the argument array
    const randomIndex = Math.floor(Math.random() * copyArray.length);//Picking the Random number between the 0-copyarray i.e newly creating array
    const pickedIndex = copyArray.splice(randomIndex, 1)[0]; //Splicing the array i.e removing the randomindex from the copied array and it returns the element of that randomindex     it changes the original array

    randomIndexes.push(pickedIndex + 1);//Pushing the removed element from the array 
  }

  return randomIndexes;//Returning the Newly created array that containing the Computer Values

}

// Main App Function Is Started
function Bingo(props) {
  let [Winner, setWinner] = useState(null)

  let array = createSequentialArray((props.Size * props.Size));//Common array For Creating Values of both User and Computer
  let checker = [[[0, 1, 2, 3, 4], [0, 6, 12, 18, 24], [0, 5, 10, 15, 20], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [4, 8, 12, 16, 20]],

  [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [0, 6, 12, 18, 24, 30], [1, 7, 13, 19, 25, 31], [2, 8, 14, 20, 26, 32], [3, 9, 15, 21, 27, 33], [4, 10, 16, 22, 28, 34], [5, 11, 17, 23, 29, 35], [0, 7, 14, 21, 28, 35], [5, 10, 15, 20, 25, 30]],

  [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], [42, 43, 44, 45, 46, 47, 48], [0, 7, 14, 21, 28, 35, 42], [1, 8, 15, 22, 29, 36, 43], [2, 9, 16, 23, 30, 37, 44], [3, 10, 17, 24, 31, 38, 45], [4, 11, 18, 25, 32, 39, 46], [5, 12, 19, 26, 33, 40, 47], [6, 13, 20, 27, 34, 41, 48], [0, 8, 16, 24, 32, 40, 48], [6, 12, 18, 24, 30, 36, 42]]]
  let [computerValue, setComputerValue] = useState(Array((props.Size * props.Size)).fill(null))//Values for computer
  let [userValue, setUserValue] = useState(Array((props.Size * props.Size)).fill(null));//Values For User Table 
  let [i, seti] = useState(0)//Index of User Values Used for reference Only
  let [bingoArray, setBingoArray] = useState([])
  let [withoutX, setWithoutX] = useState(array.slice())//Creating Dummy variable for computer values without x value
  let [checkerArray, setCheckerArray] = useState({ user: [...checker[0]], computer: [...checker[0]] })
  let [BINGO, setBINGO] = useState({ user: [['B', 'I', 'N', 'G', 'O'], 0], computer: [['B', 'I', 'N', 'G', 'O'], 0] })
  let [Turn, setTurn] = useState("user")
  let computercheckerdummy = [...checkerArray.computer]
  let levelarray = new Array(checkerArray.computer.length).fill(null)


  function Bingochecker(array, persons) {
    let person = persons;
    let values = array
    let dummycheckerarray, dummyBingo;
    if (person === "user") {
      dummycheckerarray = [...checkerArray.user]
      dummyBingo = [...BINGO.user]
    }
    if (person === "computer") {
      dummycheckerarray = [...checkerArray.computer]
      dummyBingo = [...BINGO.computer]
    }
    let value, dummyvalue = null
    dummycheckerarray.forEach((ele) => {
      dummyvalue = ele.every((element) => {

        return values[element] === "\u2716" || values[element] === "\u274C"
      })
      if (dummyvalue === true) {
        ele.forEach((element) => {
          values[element] = "\u274C"
        })
        dummycheckerarray.splice(dummycheckerarray.indexOf(ele), 1);
        dummyBingo[0][dummyBingo[1] <= (props.Size - 1) ? dummyBingo[1] : dummyBingo[1] - 1] = "\u2716"
        dummyBingo[1] = dummyBingo[1] + 1

        if (person === "user") {
          setBINGO({ ...BINGO, user: dummyBingo })
          setCheckerArray(() => {
            return ({ ...checkerArray, user: dummycheckerarray })
          })
          setUserValue([...values])
        }
        else {
          if (person === "computer") {
            computercheckerdummy = [...dummycheckerarray]
            setBINGO({ ...BINGO, computer: dummyBingo })
            setCheckerArray(() => {
              return ({ ...checkerArray, computer: dummycheckerarray })
            })
            setComputerValue([...values])
          }
        }

        if (BINGO.user[0].every((ele) => ele === "\u2716")) {
          value = "USER"


        }
        else {
          if (BINGO.computer[0].every((ele) => ele === "\u2716")) {
            value = "COMPUTER"


          }
          else {
            value = null
          }

        }


      }
    })
    return value
  }

  let btn_handleclick = () => {
    // let values = pickRandomIndexes(array, (props.Size * props.Size))
    // setComputerValue(values);//Setting the array for compute

    let values = pickRandomIndexes(array, (props.Size * props.Size))
    setComputerValue(values);//Setting the array for computer


    // setWithoutX(computerValue)


  }
  //Code for User Started Here
  let userdummy = [...userValue];//Creating Dummy Variable for User
  let computerdummy = computerValue.slice();//Creating Dummy Variable for computer
  let check;


  function userHandleClick(index) {
    let button=null
    check = Bingochecker(userValue, "user")
    if (check !== "USER") {
      check = Bingochecker(computerValue, "computer")
    }
    if (userdummy[index] == null) {
      userdummy[index] = (array[i] + 1);
      setUserValue([...userdummy])// Setting the User Table Values
      seti(i + 1)
      if (userdummy.every((element) => element !== null && element !== undefined && element !== '')) {
        btn_handleclick()
      }
    }
    if (userValue.every((element) => element !== null) && computerValue.every((element) => element !== null) && userValue[index] !== "\u2716" && Turn === "user" && userValue[index] !== "\u274C")
     {//Checking the both tables are fill are not
      let newwithoutX = [...withoutX]
      let newbingoarray = bingoArray.slice()
      // let person = 'user'



      if (check !== "USER" && check !== "COMPUTER") {
        button=new Audio(Button)
        
        props.Click && button.play()

        newwithoutX.splice(newwithoutX.indexOf(computerdummy.indexOf(userdummy[index])), 1);
        newbingoarray.push(userdummy[index])
        computerdummy[computerdummy.indexOf(userdummy[index])] = "\u2716"
        userdummy[index] = "\u2716";
        setUserValue(() => [...userdummy]);
        setComputerValue(() => computerdummy)
        setBingoArray(() => newbingoarray)
        setWithoutX(() => newbingoarray)
        check = Bingochecker(userdummy, "user")
        if (check === "USER") {
          setWinner(check)

          // window.alert("WIN USER")
          return
        }
        else {
          check = Bingochecker(computerdummy, "computer")
          if (check === "COMPUTER") {
            // window.alert("WIN COMPUTER")
            setWinner(check)

            return
          }
        }
      }
      if (check !== "USER" && check !== "COMPUTER") {

        setTurn("computer")
        setTimeout(() => {
          if (props.Level === "easy") {
            let randomIndex = null
            // person = "computer"
            randomIndex = Math.floor(Math.random() * newwithoutX.length)
            userdummy[userdummy.indexOf(computerdummy[newwithoutX[randomIndex]])] = "\u2716";
            newbingoarray.push(computerdummy[newwithoutX[randomIndex]])
            computerdummy[newwithoutX[randomIndex]] = "\u2716"
            newwithoutX.splice(randomIndex, 1)

          }
          else {
            levelarray = Array(checkerArray.computer.length).fill(null)
            computercheckerdummy.forEach((element, index) => {
              let i = 0
              if (!(element.every((ele) => computerdummy[ele] === "\u274C"))) {
                element.forEach((ele) => {
                  if (computerdummy[ele] === "\u2716" || computerdummy[ele] === "\u274C") {
                    i++
                  }
                })
              }
              levelarray[index] = i
            })
            let maxnum = Math.max(...levelarray)
            let index = levelarray.indexOf(maxnum)
            for (let i = 0; i < computercheckerdummy[index].length; i++) {
              const ele = computercheckerdummy[index][i];
              if (computerdummy[ele] !== "\u2716" && computerdummy[ele] !== "\u274C") {
                newbingoarray.push(computerdummy[ele])
                userdummy[userdummy.indexOf(computerdummy[ele])] = "\u2716";
                computerdummy[ele] = "\u2716";
                break; // Exit the loop once the condition is met
              }
            }

          }
          setUserValue(() => userdummy);
          setComputerValue(() => computerdummy)
          setBingoArray(() => newbingoarray)
          setWithoutX(() => newwithoutX)
          check = Bingochecker(computerdummy, "computer")
          if (check === "COMPUTER") {
            setWinner(check)
            // window.alert("WIN COMPUTER")
            return
          }
          else {
            check = Bingochecker(userdummy, "user")
            if (check === "USER") {
              setWinner(check)
              // window.alert("WIN USER")
              return
            }
            else {
              setTurn("user")
            }
          }
           button=null
        }, 1000)


      }



    }




  }
  useEffect(() => {

    array = createSequentialArray((props.Size * props.Size));
    setBINGO({ user: props.Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : props.Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0], computer: props.Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : props.Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0] })
    setCheckerArray({ user: props.Size === 5 ? [...checker[0]] : props.Size === 6 ? [...checker[1]] : [...checker[2]], computer: props.Size === 5 ? [...checker[0]] : props.Size === 6 ? [...checker[1]] : [...checker[2]] })
    setWithoutX([...array])
    setUserValue(Array(props.Size*props.Size).fill(null))
    setComputerValue(Array(props.Size*props.Size).fill(null))

  }, [props.Size, props.Level])

  function generateButton() {
    const winnerElement = document.getElementById("winner");
    if( winnerElement.classList.contains("animation")
    ){console.log("hello world")
      closewinner()
    }
    const winnerh1 = document.querySelector("#winnerh1");
    winnerh1.classList.add("winner");
    check = null
    setWinner(null)
    let array = createSequentialArray((props.Size * props.Size));//Common array For Creating Values of both User and Computer
    userdummy = pickRandomIndexes(array, (props.Size * props.Size))
    setUserValue(userdummy);//Generating the Users values Randomly
    setWithoutX(array)
    setBingoArray([])
    setTimeout(() => btn_handleclick(), 1000)
    // setComputerValue(pickRandomIndexes(array, (props.Size * props.Size)));
    setBINGO({ user: props.Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : props.Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0], computer: props.Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : props.Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0] })
    setCheckerArray({ user: props.Size === 5 ? [...checker[0]] : props.Size === 6 ? [...checker[1]] : [...checker[2]], computer: props.Size === 5 ? [...checker[0]] : props.Size === 6 ? [...checker[1]] : [...checker[2]] })
    setTurn("user")
  }
  const closewinner = () => {
    const winnerElement = document.getElementById("winner");
    // const winnerh1 = document.querySelector("#winnerh1");
    winnerElement.classList.add("winner");
    winnerElement.classList.remove("animation");
  }
  useEffect(() => {

    if (Winner) {
      const winnerElement = document.getElementById("winner");
      const winnerh1 = document.querySelector("#winnerh1");
      winnerElement.classList.remove("winner");
      winnerh1.classList.remove("winner");
      winnerElement.classList.add("animation");
      // winnerElement.addEventListener("animationend",()=>{
      //   winnerElement.classList.add("winner");
      //   winnerElement.classList.remove("animation");
      // })
    }
  }, [Winner]);

  return (
    <>

      <div className="App">

        <h1>Level:{props.Level.charAt(0).toUpperCase() + props.Level.slice(1)}</h1>
        <div className='winnerparent' >
          <h1 className='winner' id='winnerh1'> Winner :{Winner}</h1>
        </div>
        <div className='g-main-container'>
          <div className="user-container" style={{ position: "relative" }}>
            <Table values={userValue} size={props.Size} handleclick={userHandleClick} Bingo={BINGO.user} />{/* Creating User Table */}
            <button className='btn-value' onClick={generateButton}>{Winner===null?userValue.every((element) => element !== null) ? "Re-Fresh" : "Generate":<i className="fa-solid fa-rotate-left"></i>}</button>
            {/* <button className='btn-value' onClick={ btn_handleclick()}>Play</button> */}
          </div>
          <div className="winner" id="winner">Winner : {Winner} <button className='winnerclose' onClick={() => { closewinner() }}><i className="fa fa-times" aria-hidden="true"></i> </button><button className='btn-value' onClick={generateButton}>{Winner===null?userValue.every((element) => element !== null) ? "Re-Fresh" : "Generate":<i className="fa-solid fa-rotate-left"></i>}</button></div>
          <div className='computertable'>
            <Table values={computerValue} size={props.Size} handleclick={() => { }} Bingo={BINGO.computer} /> {/* Creating Computer Table */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bingo;
