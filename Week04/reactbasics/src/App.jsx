//importing the usestate hook to rerender the state variable
import { useState } from 'react'
import './App.css'
//For the Dynamic Website - State and Componets


function App() {
  //Defing the italial state variable
   const [count,setCount] = useState(0);

   //TODO STATE
   const [todo,settodo] = useState(
    [
      {
        title : "GO TO GYM",
        disc : "this is the discription of the todo",
        completed : true
      },
      {
        title : "GO TO HOME",
        disc : "this is the discription of the todo and HOME",
        completed : false
      },
      {
        title : "GO TO Sleep",
        disc : "this is the discription of the todo and HOME",
        completed : false
      }
    ]
   )

  return(
    <div>

      <div>
        <h1>THis is a TODO</h1>
        <div>
        {/* This is the dumb way of rendering the componets from the array we must use the map fuctiosn to automatically map the attay */}
          {/* <Todofuction title={todo[0].title} disc = {todo[0].disc} ></Todofuction>
          <Todofuction title={todo[1].title} disc = {todo[1].disc} ></Todofuction> */}

          {/* USing the MAP Funtion */}
          {todo.map(function(todo){
            return <Todofuction title={todo.title} disc={todo.disc}></Todofuction>
          })}

          {/* to add a new todo use the array spred oprator */}
          <button onClick={addtodo}>ADD TODO</button>
        </div>
      </div>


    {/* Writing the componets resusing */}



      <Custombutton count={count} setCount={setCount}></Custombutton>
      <Custombutton count={count+2} setCount={setCount}></Custombutton>
    </div>
  )


//Componet
function Custombutton(props){
  console.log(props)

  function onClickHandler(){
    // state.count = state.count + 1
    // console.log(state.count)

    //Set the state variable
    props.setCount(props.count + 1);
  }


  return <button onClick={onClickHandler}>Counter {props.count}</button>

  
}



//TODO APPLICATION

function Todofuction(props){
  //Defing the custom componet to render the todos where it gets the todos from the props
  return <div>
  <h2>{props.title}</h2>
  <h4>{props.disc}</h4>

  </div>

}

function addtodo(){
  settodo([...todo,{
    title : "NEW TODO",
    disc : "This is the disc of new todo",
    completed : true
  }])
}



}

export default App
 