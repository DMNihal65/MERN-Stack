import React, { useState } from 'react'

let count = 4

function Todo() {
    const [todos,setTodos]= useState([{
        id:1,
        title: 'Todos',
        desc : "this is the description1"
    },
    {   id:2,
        title: 'Todos',
        desc : "this is the description2"
    },{
        id:3,
        title: 'Todos',
        desc : "this is the description3"
    }])

    function addtodo(){
        setTodos([...todos,{id: count++,title: 'Todos new',desc:'new desc'}])
    }



  return (
    <div>
    <button onClick={addtodo}>Add Todo</button>
      {todos.map(function(todo){
        //Should have a Key to render the array or lists
        return <Todos key={todo.id} title={todo.title} desc={todo.desc}/>
      })}
    </div>
  )
}

function Todos({title,desc}){
    return(
        <div>
            <h1>{title}</h1>
      <h5>{desc}</h5>
        </div>
    )
}

export default Todo