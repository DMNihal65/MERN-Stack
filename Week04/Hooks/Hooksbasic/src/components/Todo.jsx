import React, { useEffect, useState } from 'react'

function Todo() {
    const [todos,setTodos] = useState({})

    useEffect(function(){
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(function(todo){
            setTodos(todo.json())
        })
    },[])

  return (
    <div>
        <h1>{todos.title}</h1>
        <h5>{todos.description}</h5>
    </div>
  )
}

export default Todo