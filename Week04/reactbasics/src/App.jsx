//importing the usestate hook to rerender the state variable
import { useState } from 'react'
import './App.css'
//For the Dynamic Website - State and Componets


function App() {
  //Defing the italial state variable
   const [count,setCount] = useState(0);

  // let state = {
  //   count : 0
  // }
  // const [count, setCount] = useState(0)

  function onClickHandler(){
    // state.count = state.count + 1
    // console.log(state.count)

    //Set the state variable
    setCount(count + 1);
  }

//  jsx - Javscript+xml


//Componet
function Custombutton(){

}

export default App
 