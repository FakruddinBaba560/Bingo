


// // // {/* <div className="tbl-row">
// // // <Square value={props.value[0]}/><Square value={props.value[1]}/><Square value={props.value[2]}/><Square value={props.value[3]}/><Square value={props.value[4]}/>
// // // </div>
// // // <div className="tbl-row">
// // // <Square value={props.value[5]}/><Square value={props.value[6]}/><Square value={props.value[7]}/><Square value={props.value[8]}/><Square value={props.value[9]}/>
// // // </div>
// // // <div className="tbl-row">
// // // <Square value={props.value[10]}/><Square value={props.value[11]}/><Square value={props.value[12]}/><Square value={props.value[13]}/><Square value={props.value[14]}/>
// // // </div>
// // // <div className="tbl-row">
// // // <Square value={props.value[15]}/><Square value={props.value[16]}/><Square value={props.value[17]}/><Square value={props.value[18]}/><Square value={props.value[19]}/>
// // // </div>
// // // <div className="tbl-row">
// // // <Square value={props.value[20]}/><Square value={props.value[21]}/><Square value={props.value[22]}/><Square value={props.value[23]}/><Square value={props.value[24]}/>
// // // </div>

// // // <div className="tbl-row">
// // // <Square /><Square /><Square /><Square /><Square />
// // // </div>
// // // <div className="tbl-row">
// // // <Square /><Square /><Square /><Square /><Square />
// // // </div>
// // // <div className="tbl-row">
// // // <Square /><Square /><Square /><Square /><Square />
// // // </div>
// // // <div className="tbl-row">
// // // <Square /><Square /><Square /><Square /><Square />
// // // </div>
// // // <div className="tbl-row">
// // // <Square /><Square /><Square /><Square /><Square />
// // // </div> */}
// // // // {let[ computer,setcomputer]=useState(Array(25).fill(null))
// // // // let value=new Array(25).fill(null);
// // // // let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// // // // let j=0;
// // // // let i=0;
// // // // let index=0;
// // // // while(i<1){

// // // //  index=Math.floor(Math.random()*25);
// // // //   if(value[index]==null){
// // // //     value[index]=array[j];

// // // //     j++
// // // //   }
// // // //  if(value.every((element)=>element!==null)){
// // // //     i=1;
// // // //     setcomputer(value)
// // // //  }

// // // // }
// // // // }
// // // function pickRandomIndexes(array, count) {
// // //   const copyArray = [...array];
// // //   const randomIndexes = [];

// // //   while (randomIndexes.length < count && copyArray.length > 0) {
// // //     const randomIndex = Math.floor(Math.random() * copyArray.length); 
// // //     const pickedIndex = copyArray.splice(randomIndex, 1)[0]; // 
// // //     randomIndexes.push(pickedIndex); 
// // //   }

// // //   return randomIndexes;
// // // }



// // // function loopFunction() {
// // //   for (let i = 0; i < 10; i++) {
// // //     console.log(i);
// // //   }
// // // }

// // // setInterval(loopFunction, 1000);
// // // newbingoarray.push(userValue[index])
// // //       setbingoArray(()=>newbingoarray)
// // //       newwithoutX.splice(withoutX.indexOf(computerValue.indexOf(userValue[index])),1)
// // //       setwithoutX(()=>newwithoutX)
// // //       console.log(newwithoutX)
// // //       computerdummy[computerValue.indexOf(userValue[index])] = 'X'
// // //       setcomputerValue(()=>computerdummy)
// // //       userdummy[index] = 'X'//Changing the value of clicked index into 'X' 
// // //       setuserValue(()=>userdummy)//Update the Uservalue

// // //       let randomIndex = null
// // //       while(randomIndex===null){
// // //         randomIndex = Math.floor(Math.random() * withoutX.length)
// // //         if(computerdummy[withoutX[randomIndex]]==='X'){
// // //           randomIndex=null
// // //         }

// // //       }
// // //        console.log(computerdummy[withoutX[randomIndex]])
// // //       newbingoarray.push(computerdummy[withoutX[randomIndex]])
// // //       setbingoArray(()=>newbingoarray)
// // //       userdummy[userdummy.indexOf(computerdummy[withoutX[randomIndex]])] = 'X'
// // //       setuserValue(() => userdummy)
// // //       computerdummy[withoutX[randomIndex]] = 'X'
// // //       setcomputerValue(() => computerdummy)
// // //       newwithoutX.splice(withoutX[randomIndex],1)
// // //       setwithoutX(()=>newwithoutX)

// // //       // console.log(computerValue)
// // //       // console.log(userValue)
// // //       // console.log("withoutx in computer"+   newwithoutX  ,newwithoutX.length)
// // //       // console.log("random "+randomIndex)
// // //       // console.log("bingo array"+   newbingoarray)
// // // let a=[[0,1,2,3,4],[0,6,12,18,24],[0,5,10,15,20],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[4,8,12,16,20]]
// // //     console.log(computerValue)
// // //     console.log(computerdummy)
// // //       console.log(newwithoutX)
// // //       console.log(newbingoarray)
// // //       console.log(randomIndex)


// // // let a=[[0,1,2,3,4],[0,6,12,18,24],[0,5,10,15,20],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[4,8,12,16,20]]
// // // let value,dummyvalue=null
// // // let b=[0,1,2,3,4,"X","X","X","X","X",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
// // //   a.forEach((ele)=>{
// // //     dummyvalue=ele.every((element)=>{

// // //      return b[element]==='X'
// // //     })
// // //     // console.log(value)
// // //     if(dummyvalue===true){
// // //       a.splice(a.indexOf(ele),1);
// // //       value=true
// // //     }
// // //   }) 
// // //   console.log(value)
// // //   console.log(a)
// // //   // console.log(element)
// // //   //  let c= b.every((element)=>{
// // //   //   console.log(element)
// // //   //     return element>=1;
// // //   //   })
// // //   //   console.log(c)
// // // let bingo={user:[['U','I','N','G','O'],0],computer:[['C','I','N','G','O'],0]}
// // // // let userbingo=[...bingo.user]
// // // // let computerbingo=[...bingo.computer]
// // // // console.log(userbingo)
// // // // console.log(computerbingo)
// // // let value=bingo.user.every((ele)=>{
// // //     console.log(ele)
// // //     return ele!=null
// // // })
// // // console.log(value)
// // let checker = [[0, 1, 2, 3, 4], [0, 6, 12, 18, 24], [0, 5, 10, 15, 20], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [4, 8, 12, 16, 20]]
// // function Bingochecker(values, person) {
// //     let dummycheckerarray, dummyBingo;
// //     if (person === "user") {
// //         dummycheckerarray = [...checkerArray.user]

// //         dummyBingo = [...BINGO.user]
// //     }
// //     else {
// //         if (person === "computer") {
// //             dummycheckerarray = [...checkerArray.computer]

// //             dummyBingo = [...BINGO.computer]
// //         }

// //     }
// //     let value, dummyvalue = null
// //     dummycheckerarray.forEach((ele) => {
// //         dummyvalue = ele.every((element) => {

// //             return values[element] === 'X'
// //         })
// //         if (dummyvalue === true) {
// //             console.log(dummyvalue)
// //             dummycheckerarray.splice(dummycheckerarray.indexOf(ele), 1);
// //             setCheckerArray(...dummycheckerarray)
// //             dummyBingo[0][dummyBingo[1]] = "X"
// //             dummyBingo[1] = dummyBingo[1] + 1
// //             console.log(dummyBingo)
// //             if (person === "user") {
// //                 // setBINGO({ ...BINGO, user: dummyBingo })
// //                 // setCheckerArray({ ...checkerArray, user: dummycheckerarray })
// //             }
// //             else {

// //                 // setBINGO({ ...BINGO, computer: dummyBingo })
// //                 // setCheckerArray({ ...checkerArray, computer: dummycheckerarray })

// //             }

// //             if (BINGO.user[0].every((ele) => ele === 'X')) {
// //                 value = "USER"
// //             }
// //             else {
// //                 if (BINGO.computer[0].every((ele) => ele === 'X')) {
// //                     value = "COMPUTER"
// //                 }
// //                 else {
// //                     value = null
// //                 }

// //             }
// //         }
// //     })
// //     console.log(value)
// //     return value
// // }
// // let person="user"
// // let b=[0,1,2,3,4,"X","X","X","X","X",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
// // let obj={user:[...checker],computer:[...checker]}
// // obj.user[0][1]='U'
// // console.log([...obj.user])
// // console.log([...obj.computer])
// // let sta="user"
// // console.log(!(sta==="use"))
// // const array = ["Hello", "World", "\u274C"];

// // console.log(array);
// // let randomIndex = null
// //           // person = "computer"
// //           randomIndex = Math.floor(Math.random() * newwithoutX.length)
// //           userdummy[userdummy.indexOf(computerdummy[newwithoutX[randomIndex]])] = "X";
// //           newbingoarray.push(computerdummy[newwithoutX[randomIndex]])
// //           computerdummy[newwithoutX[randomIndex]] = "X"
// //           check = Bingochecker(computerdummy, "computer")
// //           check = Bingochecker(userdummy, "user")
// //           newwithoutX.splice(randomIndex, 1)
// //           setUserValue(userdummy);
// //           setComputerValue(computerdummy)
// //           setBingoArray(newbingoarray)
// //           setWithoutX(newwithoutX)








// // import { useState } from 'react';
// // import './App.css';
// // import Table from './Components/Table';


// // // Picking a Random Number From 0-25

// // function pickRandomIndexes(array, count) {
// //   const copyArray = [...array];//Copying The Array Argument
// //   const randomIndexes = [];//Creating A New Array For Storing THe Random Values
// //   while (randomIndexes.length < count && copyArray.length > 0) {//Checking the loop  i.e less then the count argument and less than the length of the argument array
// //     const randomIndex = Math.floor(Math.random() * copyArray.length);//Picking the Random number between the 0-copyarray i.e newly creating array
// //     const pickedIndex = copyArray.splice(randomIndex, 1)[0]; //Splicing the array i.e removing the randomindex from the copied array and it returns the element of that randomindex     it changes the original array

// //     randomIndexes.push(pickedIndex + 1);//Pushing the removed element from the array 
// //   }

// //   return randomIndexes;//Returning the Newly created array that containing the Computer Values

// // }

// // // Main App Function Is Started
// // function App() {
// //   let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];//Common array For Creating Values of both User and Computer
// //   let checker = [[0, 1, 2, 3, 4], [0, 6, 12, 18, 24], [0, 5, 10, 15, 20], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [4, 8, 12, 16, 20]]
// //   let [computerValue, setComputerValue] = useState(Array(25).fill(null))//Values for computer
// //   let [btnvalue, setBtnvalue] = useState(false)//Tracking the OK buttom 
// //   let [userValue, setUserValue] = useState(Array(25).fill(null));//Values For User Table 
// //   let [i, seti] = useState(0)//Index of User Values Used for reference Only
// //   let [bingoArray, setBingoArray] = useState([])
// //   let [withoutX, setWithoutX] = useState(array.slice())//Creating Dummy variable for computer values without x value
// //   let [checkerArray, setCheckerArray] = useState({ user: [...checker], computer: [...checker] })
// //   let [BINGO, setBINGO] = useState({ user: [['B', 'I', 'N', 'G', 'O'], 0], computer: [['B', 'I', 'N', 'G', 'O'], 0] })
// //   let [Turn,setTurn]=useState("user")
  
// //   function Bingochecker(array, persons) {
// //     let person=persons;
// //     let values=array
// //     let dummycheckerarray, dummyBingo;
// //     if (person === "user") {
// //       dummycheckerarray = [...checkerArray.user]

// //       dummyBingo = [...BINGO.user]
// //     }
    
// //       if (person === "computer") {
// //         dummycheckerarray = [...checkerArray.computer]

// //         dummyBingo = [...BINGO.computer]
// //       }

    
// //     let value, dummyvalue = null
// //     dummycheckerarray.forEach((ele) => {
// //       dummyvalue = ele.every((element) => {

// //         return values[element] === 'X' || values[element] === "\u274C"
// //       })
// //       if (dummyvalue === true) {
// //         ele.forEach((element) => {
// //           values[element] = "\u274C"
// //         })


// //         dummycheckerarray.splice(dummycheckerarray.indexOf(ele), 1);
// //         dummyBingo[0][dummyBingo[1]] = "X"
// //         dummyBingo[1] = dummyBingo[1] + 1
     
// //         if (person === "user") {
// //           setBINGO({ ...BINGO, user: dummyBingo })
// //           setCheckerArray({ ...checkerArray, user: dummycheckerarray })
// //           setUserValue([...values])
// //         }
// //         else {
// //       if (person === "computer") {
          
// //           setBINGO({ ...BINGO, computer: dummyBingo })
// //           setCheckerArray({ ...checkerArray, computer: dummycheckerarray })
// //           setComputerValue([...values])
// //       }
// //         }

// //         if (BINGO.user[0].every((ele) => ele === 'X')) {
// //           value = "USER"
       

// //         }
// //         else {
// //           if (BINGO.computer[0].every((ele) => ele === 'X')) {
// //             value = "COMPUTER"
           

// //           }
// //           else {
// //             value = null
// //           }

// //         }

        
// //       }
// //     })
// //     return value
// //   }
  
// //   let btn_handleclick = () => {
// //     if (btnvalue === false) {
// //       let values = pickRandomIndexes(array, 25)
// //       setComputerValue(values);//Setting the array for computer
// //       setBtnvalue(true)

// //       // setWithoutX(computerValue)

// //     }
// //   }
// //   //Code for User Started Here

// //   let userdummy = userValue.slice();//Creating Dummy Variable for User
// //   let computerdummy = computerValue.slice();//Creating Dummy Variable for computer
// //   let check;
  

// //   function userHandleClick(index) {
// //     check=  Bingochecker(userValue, "user")
// //     if(check===null){
// //       check=Bingochecker(computerValue, "computer")
// //     }
// //     if (userdummy[index] == null) {
// //       userdummy[index] = (array[i] + 1);
// //       setUserValue(userdummy)// Setting the User Table Values
// //       seti(i + 1)
// //     }
// //     if (userValue.every((element) => element !== null) && computerValue.every((element) => element !== null) && userValue[index] !== 'X' &&Turn==="user") {//Checking the both tables are fill are not
// //       let newwithoutX = [...withoutX]
// //       let newbingoarray = bingoArray.slice()
// //       // let person = 'user'
      
       
      
// //       if (check!=="USER"&&check!=="COMPUTER") {

// //         newwithoutX.splice(newwithoutX.indexOf(computerdummy.indexOf(userdummy[index])), 1);
// //         newbingoarray.push(userdummy[index])
// //         computerdummy[computerdummy.indexOf(userdummy[index])] = 'X'
// //         userdummy[index] = "X";
// //         setUserValue(()=>userdummy);
// //         setComputerValue(()=>computerdummy)
// //         setBingoArray(()=>newbingoarray)
// //         setWithoutX(()=>newbingoarray)
// //         check = Bingochecker(userdummy, "user")
// //         if(check==="USER"){
// //           window.alert("WIN USER")
// //           return
// //         }
// //         else{
// //           check = Bingochecker(computerdummy, "computer")
// //           if(check==="COMPUTER"){
// //             window.alert("WIN COMPUTER")
// //             return
// //           }
// //          }
       

// //         if (!(check === "USER" || check === "COMPUTER")) {
// //           setTurn("computer")
// //           setTimeout(()=>{
// //             let randomIndex = null
// //           // person = "computer"
// //           randomIndex = Math.floor(Math.random() * newwithoutX.length)
// //           userdummy[userdummy.indexOf(computerdummy[newwithoutX[randomIndex]])] = "X";
// //           newbingoarray.push(computerdummy[newwithoutX[randomIndex]])
// //           computerdummy[newwithoutX[randomIndex]] = "X"
// //           newwithoutX.splice(randomIndex, 1)
// //           setUserValue(()=>userdummy);
// //           setComputerValue(()=>computerdummy)
// //           setBingoArray(()=>newbingoarray)
// //           setWithoutX(()=>newwithoutX)
// //           check = Bingochecker(computerdummy, "computer") 
// //           if(check==="COMPUTER")
// //           {
// //             window.alert("WIN COMPUTER")
// //              return
// //           }
// //           else{
// //             check = Bingochecker(userdummy, "user")
// //             if(check==="USER"){
// //               window.alert("WIN USER")
// //               setTurn("computer")
// //               return
// //             }
// //             else
// //           {setTurn("user")}
// //            }
// //           },1000)
          

// //         }
// //       }


// //     }
// //     if ( !computerValue.every((element) => element !== null)) {//Checking the whether computer table is set are not 
// //       window.alert("Set the computer table")
// //     }
    
// //     if(check==="COMPUTER"){
// //       window.alert("WIN COMPUTER")
// //     }
    
// //   }
// //   function Size_btn(e){
// //     console.log(e.target.value)
// //   }
// //   function generateButton() {
// //     check=null
// //     setUserValue(pickRandomIndexes(array, 25));//Generating the Users values Randomly
// //     setWithoutX(array)
// //     setBingoArray([])
// //     if (computerValue.every((element) => element !== null)) {//Checking if the computer values are null or not if not then regenerate the value if null click the set the computer
// //       setComputerValue(pickRandomIndexes(array, 25));
// //       setBINGO({ user: [['B', 'I', 'N', 'G', 'O'], 0], computer: [['B', 'I', 'N', 'G', 'O'], 0] })
// //       setCheckerArray({ user: [...checker], computer: [...checker] })
// //     setTurn("user")
      
// //     }
// //   }
  
// //   return (
// //     <div className="App">
// //       <h1>BINGO</h1>
// //       <div className='g-main-container'>
// //         <Table values={userValue} handleclick={userHandleClick} Bingo={BINGO.user} />{/* Creating User Table */}
// //         <button className='btn-value' onClick={generateButton}>{userValue.every((element) => element !== null) ? computerValue.every((element) => element === null) ? "Re-Generate" : "Re-Fresh" : "Generate"}</button>
// //         <select onClick={Size_btn}>
// //           <option value="5" >5</option>
// //           <option value="6" >6</option>
// //           <option value="7" >7</option>
// //         </select>
// //         <button className='btn-value' disabled={!userValue.every((element) => element !== null)}/* By using the conditional statement we check the whether uservalues are fill or not in statement it checks the every element whether they are null even one element is null it return the false to convert it into true we can put the not(!) symbole before the array */ onClick={btn_handleclick}>{btnvalue ? "computer is ready to play" : "set the computer"}</button>
// //         <Table values={computerValue} handleclick={() => { }} Bingo={BINGO.computer} /> {/* Creating Computer Table */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;











// // function createSequentialArray(size) {
// //     var sequentialArray = [];
    
// //     for (var i = 0; i < size; i++) {
// //       sequentialArray.push(i); // Add the current number to the array
// //     }
    
// //     return sequentialArray;
// //   }
// //   let a=createSequentialArray(5*5)
// //   let b=[createSequentialArray(6*6)]
// //   let c=[createSequentialArray(7*7)]
// //   console.log(a)
// //   console.log(b)
// // //   console.log(c)
// // function divideArray(array, parts) {
// //     var arrayLength = array.length;
// //     var partSize = Math.ceil(arrayLength / parts); // Calculate the size of each part
  
// //     var dividedArray = [];
  
// //     for (var i = 0; i < arrayLength; i += partSize) {
// //       var part = array.slice(i, i + partSize); // Extract a portion of the array as a part
// //       dividedArray.push(part);
// //     }
  
// //     return dividedArray;
// //   }
// // let array=[[0,1,2,3,4,5],[6,7,8,9,10,11],[12,13,14,15,16,17],[18,16,20,21,22,23],[24,25,26,27,28,29],[30,31,32,33,34,35],[0,6,12,18,24,30],[1,7,13,19,25,31],[2,8,14,20,26,32],[3,9,15,21,27,33],[4,10,16,22,28,34],[5,11,17,23,29,35],[0,7,14,21,28,35],[5,10,15,20,25,30]]
// // [[0,1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29,30,31,32,33,34],[35,36,37,38,39,40,41],[42,43,44,45,46,47,48],[0,7,14,21,28,35,42],[1,8,15,22,29,36,43],[2,9,16,23,30,37,44],[3,10,17,24,31,38,45],[4,11,18,25,32,39,40],[5,12,19,26,33,40,47],[6,13,20,27,34,41,48],[0,8,16,24,32,40,48],[6,12,18,24,30,36,42]]
// //   // Usage example
// //   var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; // The original array
// //   var numberOfParts = 5; // Number of parts to divide the array into
  
// //   var dividedArray = divideArray(myArray, numberOfParts);
  
// //   console.log(dividedArray); // Output the divided array
// //   let array=[[0,1,2,3,4,5],[6,7,8,9,10,11],[12,13,14,15,16,17],[18,16,20,21,22,23],[24,25,26,27,28,29],[30,31,32,33,34,35],[0,6,12,18,24,30],[1,7,13,19,25,31],[2,8,14,20,26,32],[3,9,15,21,27,33],[4,10,16,22,28,34],[5,11,17,23,29,35],[0,7,14,21,28,35],[5,10,15,20,25,30]]
// //   let array2=[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29,30,31,32,33,34],[35,36,37,38,39,40,41],[42,43,44,45,46,47,48],[0,7,14,21,28,35,42],[1,8,15,22,29,36,43],[2,9,16,23,30,37,44],[3,10,17,24,31,38,45],[4,11,18,25,32,39,40],[5,12,19,26,33,40,47],[6,13,20,27,34,41,48],[0,8,16,24,32,40,48],[6,12,18,24,30,36,42]]
// // { user: [['B', 'I', 'N', 'G', 'O'], 0], computer: [['B', 'I', 'N', 'G', 'O'], 0] }
// // let Size=6
// // let checker=[[[0, 1, 2, 3, 4], [0, 6, 12, 18, 24], [0, 5, 10, 15, 20], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [4, 8, 12, 16, 20]],[[0,1,2,3,4,5],[6,7,8,9,10,11],[12,13,14,15,16,17],[18,16,20,21,22,23],[24,25,26,27,28,29],[30,31,32,33,34,35],[0,6,12,18,24,30],[1,7,13,19,25,31],[2,8,14,20,26,32],[3,9,15,21,27,33],[4,10,16,22,28,34],[5,11,17,23,29,35],[0,7,14,21,28,35],[5,10,15,20,25,30]],[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29,30,31,32,33,34],[35,36,37,38,39,40,41],[42,43,44,45,46,47,48],[0,7,14,21,28,35,42],[1,8,15,22,29,36,43],[2,9,16,23,30,37,44],[3,10,17,24,31,38,45],[4,11,18,25,32,39,40],[5,12,19,26,33,40,47],[6,13,20,27,34,41,48],[0,8,16,24,32,40,48],[6,12,18,24,30,36,42]]]
// // console.log(Size===5?[...checker[0]]:Size===6?[...checker[1]]:[checker[2]])
// // let Size=6
// // let obj={ user: Size===5?[['B', 'I', 'N', 'G', 'O'], 0]:Size===6?[['B', 'I', 'N', 'G', 'O','S'], 0]:[['B', 'I', 'N', 'G', 'O','E','S'], 0], computer: Size===5?[['B', 'I', 'N', 'G', 'O'], 0]:Size===6?[['B', 'I', 'N', 'G', 'O','S'], 0]:[['B', 'I', 'N', 'G', 'O','E','S'], 0] }
// // console.log(obj.user)
// // console.log(obj.computer)
// // useEffect(()=>{
// //     let size=Size
// //     setBINGO({ user: size===5?[['B', 'I', 'N', 'G', 'O'], 0]:size===6?[['B', 'I', 'N', 'G', 'O','S'], 0]:[['B', 'I', 'N', 'G', 'O','E','S'], 0], computer: size===5?[['B', 'I', 'N', 'G', 'O'], 0]:size===6?[['B', 'I', 'N', 'G', 'O','S'], 0]:[['B', 'I', 'N', 'G', 'O','E','S'], 0] })
// //     setCheckerArray({ user: size===5?[...checker[0]]:size===6?[...checker[1]]:[checker[2]], computer: size===5?[...checker[0]]:size===6?[...checker[1]]:[checker[2]] })
// //     console.log(size===5?[['B', 'I', 'N', 'G', 'O'], 0]:size===6?[['B', 'I', 'N', 'G', 'O','S'], 0]:[['B', 'I', 'N', 'G', 'O','E','S'], 0])
// //      console.log(BINGO)
// //     console.log(checkerArray)
// //   },[Size])
// // let array=[1,2,3,2,5,4,9,8,5]
// // console.log(array.indexOf(5))









// import { useEffect, useState } from 'react';
// import '../App.css';
// import Table from './Table';
// //Creating an array that stores the numbers from - given size
// export function createSequentialArray(size) {
//   var sequentialArray = [];

//   for (var i = 0; i < size; i++) {
//     sequentialArray.push(i); // Add the current number to the array
//   }

//   return sequentialArray;
// }


// // Picking a Random Number From 0-Size

// function pickRandomIndexes(array, count) {
//   const copyArray = [...array];//Copying The Array Argument
//   const randomIndexes = [];//Creating A New Array For Storing THe Random Values
//   while (randomIndexes.length < count && copyArray.length > 0) {//Checking the loop  i.e less then the count argument and less than the length of the argument array
//     const randomIndex = Math.floor(Math.random() * copyArray.length);//Picking the Random number between the 0-copyarray i.e newly creating array
//     const pickedIndex = copyArray.splice(randomIndex, 1)[0]; //Splicing the array i.e removing the randomindex from the copied array and it returns the element of that randomindex     it changes the original array

//     randomIndexes.push(pickedIndex + 1);//Pushing the removed element from the array 
//   }

//   return randomIndexes;//Returning the Newly created array that containing the Computer Values

// }

// // Main App Function Is Started
// function Bingo() {
//   let [Size, setSize] = useState(5)
//   let array = createSequentialArray((Size * Size));//Common array For Creating Values of both User and Computer
//   let checker = [[[0, 1, 2, 3, 4], [0, 6, 12, 18, 24], [0, 5, 10, 15, 20], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [4, 8, 12, 16, 20]], [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 16, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [0, 6, 12, 18, 24, 30], [1, 7, 13, 19, 25, 31], [2, 8, 14, 20, 26, 32], [3, 9, 15, 21, 27, 33], [4, 10, 16, 22, 28, 34], [5, 11, 17, 23, 29, 35], [0, 7, 14, 21, 28, 35], [5, 10, 15, 20, 25, 30]], [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], [42, 43, 44, 45, 46, 47, 48], [0, 7, 14, 21, 28, 35, 42], [1, 8, 15, 22, 29, 36, 43], [2, 9, 16, 23, 30, 37, 44], [3, 10, 17, 24, 31, 38, 45], [4, 11, 18, 25, 32, 39, 46], [5, 12, 19, 26, 33, 40, 47], [6, 13, 20, 27, 34, 41, 48], [0, 8, 16, 24, 32, 40, 48], [6, 12, 18, 24, 30, 36, 42]]]
//   let [computerValue, setComputerValue] = useState(Array(Size).fill(null))//Values for computer
//   let [btnvalue, setBtnvalue] = useState(false)//Tracking the OK buttom 
//   let [userValue, setUserValue] = useState(Array(Size).fill(null));//Values For User Table 
//   let [i, seti] = useState(0)//Index of User Values Used for reference Only
//   let [bingoArray, setBingoArray] = useState([])
//   let [withoutX, setWithoutX] = useState(array.slice())//Creating Dummy variable for computer values without x value
//   let [checkerArray, setCheckerArray] = useState({ user: [...checker[0]], computer: [...checker[0]] })
//   let [BINGO, setBINGO] = useState({ user: [['B', 'I', 'N', 'G', 'O'], 0], computer: [['B', 'I', 'N', 'G', 'O'], 0] })
//   let [Turn, setTurn] = useState("user")
//   let [Level, setLevel] = useState("easy")
//   let computercheckerdummy = [...checkerArray.computer]
//   function Bingochecker(array, persons) {
//     let person = persons;
//     let values = array
//     let dummycheckerarray, dummyBingo;
//     if (person === "user") {
//       dummycheckerarray = [...checkerArray.user]

//       dummyBingo = [...BINGO.user]
//     }

//     if (person === "computer") {
//       dummycheckerarray = [...checkerArray.computer]

//       dummyBingo = [...BINGO.computer]
//     }


//     let value, dummyvalue = null
//     dummycheckerarray.forEach((ele) => {
//       dummyvalue = ele.every((element) => {

//         return values[element] === "\u2716" || values[element] === "\u274C"
//       })
//       if (dummyvalue === true) {
//         ele.forEach((element) => {
//           values[element] = "\u274C"
//         })


//         dummycheckerarray.splice(dummycheckerarray.indexOf(ele), 1);
//         dummyBingo[0][dummyBingo[1]] = "\u2716"
//         dummyBingo[1] = dummyBingo[1] + 1

//         if (person === "user") {
//           setBINGO({ ...BINGO, user: dummyBingo })
//           setCheckerArray(() => {
//             return ({ ...checkerArray, user: dummycheckerarray })
//           })
//           setUserValue([...values])
//         }
//         else {
//           if (person === "computer") {
//             computercheckerdummy = [...dummycheckerarray]
//             setBINGO({ ...BINGO, computer: dummyBingo })
//             setCheckerArray(() => {
//               return ({ ...checkerArray, computer: dummycheckerarray })
//             })
//             setComputerValue([...values])
//           }
//         }

//         if (BINGO.user[0].every((ele) => ele === "\u2716")) {
//           value = "USER"


//         }
//         else {
//           if (BINGO.computer[0].every((ele) => ele === "\u2716")) {
//             value = "COMPUTER"


//           }
//           else {
//             value = null
//           }

//         }


//       }
//     })
//     return value
//   }

//   let btn_handleclick = () => {
//     if (btnvalue === false) {
//       let values = pickRandomIndexes(array, (Size * Size))
//       setComputerValue(values);//Setting the array for computer
//       setBtnvalue(true)

//       // setWithoutX(computerValue)

//     }
//   }
//   //Code for User Started Here

//   let userdummy = userValue.slice();//Creating Dummy Variable for User
//   let computerdummy = computerValue.slice();//Creating Dummy Variable for computer
//   let check;


//   function userHandleClick(index) {
//     check = Bingochecker(userValue, "user")
//     if (check !== "USER") {
//       check = Bingochecker(computerValue, "computer")
//     }
//     if (userdummy[index] == null) {
//       userdummy[index] = (array[i]+1);
//       setUserValue(userdummy)// Setting the User Table Values
//       seti(i + 1)
//     }
//     if (userValue.every((element) => element !== null) && computerValue.every((element) => element !== null) && userValue[index] !== "\u2716" && Turn === "user"&&userValue[index] !== "\u274C") {//Checking the both tables are fill are not
//       let newwithoutX = [...withoutX]
//       let newbingoarray = bingoArray.slice()
//       // let person = 'user'



//       if (check !== "USER" && check !== "COMPUTER") {
//         newwithoutX.splice(newwithoutX.indexOf(computerdummy.indexOf(userdummy[index])), 1);
//         newbingoarray.push(userdummy[index])
//         computerdummy[computerdummy.indexOf(userdummy[index])] = "\u2716"
//         userdummy[index] = "\u2716";
//         setUserValue(() => userdummy);
//         setComputerValue(() => computerdummy)
//         setBingoArray(() => newbingoarray)
//         setWithoutX(() => newbingoarray)
//         check = Bingochecker(userdummy, "user")
//         if (check === "USER") {
//           window.alert("WIN USER")
//           return
//         }
//         else {
//           check = Bingochecker(computerdummy, "computer")
//           if (check === "COMPUTER") {
//             window.alert("WIN COMPUTER")
//             return
//           }
//         }
//       }
//         if (check !== "USER" && check !== "COMPUTER") {

//           setTurn("computer")
//           setTimeout(() => {
//             if (Level === "easy") {
//               let randomIndex = null
//               // person = "computer"
//               randomIndex = Math.floor(Math.random() * newwithoutX.length)
//               userdummy[userdummy.indexOf(computerdummy[newwithoutX[randomIndex]])] = "\u2716";
//               newbingoarray.push(computerdummy[newwithoutX[randomIndex]])
//               console.log( computerdummy[newwithoutX[randomIndex]])
//               computerdummy[newwithoutX[randomIndex]] = "\u2716"
//               newwithoutX.splice(randomIndex, 1)
//         console.log(newwithoutX)

//             }
//               else {
//                 let levelarray = new Array(computercheckerdummy.length).fill(null)
//                 console.log(computercheckerdummy)
//                 computercheckerdummy.forEach((element, index) => {
//                   let i = 0
//                   {
//                    if(!(element.every((ele)=>computerdummy[ele]==="\u274C"))){ element.forEach((ele) => {
//                       if (computerdummy[ele] === "\u2716" || computerdummy[ele] === "\u274C") {
//                         i++
//                       }
//                     })}
//                   }
//                   levelarray[index] = i
//                   // console.log(index)
//                 })
                
//                 let maxnum = Math.max(...levelarray)
               
//                 let index = levelarray.indexOf(maxnum)
                
//                 for (let i = 0; i < computercheckerdummy[index].length; i++) {
//                   const ele = computercheckerdummy[index][i];
//                   if (computerdummy[ele] !== "\u2716" && computerdummy[ele] !== "\u274C") {
//               newbingoarray.push(computerdummy[ele])

//                     userdummy[userdummy.indexOf(computerdummy[ele])] = "\u2716";
//                     computerdummy[ele] = "\u2716";
//                     break; // Exit the loop once the condition is met
//                   }
//                 }

//               }
            
//             setUserValue(() => userdummy);
//             setComputerValue(() => computerdummy)
//             setBingoArray(() => newbingoarray)
//             setWithoutX(() => newwithoutX)
//             check = Bingochecker(computerdummy, "computer")
//             if (check === "COMPUTER") {
//               window.alert("WIN COMPUTER")
//               return
//             }
//             else {
//               check = Bingochecker(userdummy, "user")
//               if (check === "USER") {
//                 window.alert("WIN USER")
//                 return
//               }
//               else{
//                 setTurn("user")
//               }
//             }
//           }, 1000)


//         }
      


//     }
//     if (computerValue.every((element) => element === null) && userValue.every((element) => element !== null)) {//Checking the whether computer table is set are not 
//       window.alert("Set the computer table")
//     }



//   }
//   useEffect(() => {
//     let size = Size
//     let array = createSequentialArray((size * size));
//     setBINGO({ user: size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0], computer: size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0] })
//     setCheckerArray({ user: size === 5 ? [...checker[0]] : size === 6 ? [...checker[1]] : [...checker[2]], computer: size === 5 ? [...checker[0]] : size === 6 ? [...checker[1]] : [...checker[2]] })
//     setWithoutX(array.slice())


//   }, [Size])
//   function Size_btn(e) {
//     let size = parseInt(e.target.value)
//     setSize(size)
//   }
//   function Level_btn(e) {
//     let level = (e.target.value)
//     setLevel(level)
//   }
//   function generateButton() {
//     check = null
//     setUserValue(pickRandomIndexes(array, (Size * Size)));//Generating the Users values Randomly
//     setWithoutX(array)
//     setBingoArray([])
//     if (computerValue.every((element) => element !== null)) {//Checking if the computer values are null or not if not then regenerate the value if null click the set the computer
//       setComputerValue(pickRandomIndexes(array, (Size * Size)));
//       setBINGO({ user: Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0], computer: Size === 5 ? [['B', 'I', 'N', 'G', 'O'], 0] : Size === 6 ? [['B', 'I', 'N', 'G', 'O', 'S'], 0] : [['B', 'I', 'N', 'G', 'O', 'E', 'S'], 0] })
//       setCheckerArray({ user: Size === 5 ? [...checker[0]] : Size === 6 ? [...checker[1]] : [checker[2]], computer: Size === 5 ? [...checker[0]] : Size === 6 ? [...checker[1]] : [checker[2]] })
//       setTurn("user")

//     }
//   }
//   // useEffect(()=>{
//   //    if(BINGO.user[0].every((ele)=>userdummy[ele]==="\u2716")){
//   //     window.alert("WIN USER")
//   //    }
//   //    else{
//   //     if(BINGO.computer[0].every((ele)=>computerdummy[ele]==="\u2716")){
//   //       window.alert("WIN COMPUTER")
//   //     }
//   //    }
//   // },[BINGO])

//   return (
//     <div className="App">

//       <h1>BINGO</h1>
//       <div className='g-main-container'>
//         <Table values={userValue} size={Size} handleclick={userHandleClick} Bingo={BINGO.user} />{/* Creating User Table */}
//         <button className='btn-value' onClick={generateButton}>{userValue.every((element) => element !== null) ? computerValue.every((element) => element === null) ? "Re-Generate" : "Re-Fresh" : "Generate"}</button>
//         <select disabled={userValue.every((element) => element !== null)} onClick={Size_btn}>
//           <option value="5" >5</option>
//           <option value="6" >6</option>
//           <option value="7" >7</option>
//         </select>
//         <div style={{border:"1px solid black", width:'25px',height:"25px"}}>{bingoArray[bingoArray.length-1]}</div>
//         <select disabled={userValue.every((element) => element !== null)} onClick={Level_btn} >
//           <option value="easy">Easy</option>
//           <option value="hard">Hard</option>
//         </select>
//         <button className='btn-value' disabled={!userValue.every((element) => element !== null)}/* By using the conditional statement we check the whether uservalues are fill or not in statement it checks the every element whether they are null even one element is null it return the false to convert it into true we can put the not(!) symbole before the array */ onClick={btn_handleclick}>{btnvalue ? "computer is ready to play" : "set the computer"}</button>

//         <Table values={computerValue} size={Size} handleclick={() => { }} Bingo={BINGO.computer} /> {/* Creating Computer Table */}
//       </div>
//     </div>
//   );
// }

// export default Bingo;
