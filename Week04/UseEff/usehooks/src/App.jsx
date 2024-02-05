import React from "react"
import { useState } from "react"
import Todo from "./components/Todo"

function App() {
  


  return (
    <div>
      <Headerwithbutton/>
      <Header title='Nihal' ></Header>
      <Header title='Nihal' ></Header>
      <Header title='Nihal' ></Header>
      <Header title='Nihal' ></Header>
    </div>
    
  )
}

function Headerwithbutton(){
  const [title,setTitle] = useState("My name is Nihal")
    
function handleclick(){
  title = setTitle("my name is " + Math.random())
}

  return(
    <div>
      <button onClick={handleclick} >Click Me</button>
      <Header title ={title} ></Header>
      <Todo/>
    </div>
  )
}

//USing the React Memo to skip Rerendring
const Header = React.memo(function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
})



export default App
