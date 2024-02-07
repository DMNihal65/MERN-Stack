import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Todo({id}) {
    const [todos,setTodos] = useState([])

    useEffect(function(){
        axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
            .then(function(res){
                setTodos(res.data.todos[0])
                console.log(todos)
            })

      
        // fetch(`https://sum-server.100xdevs.com/todos?id=${ids}`)
        // .then(function(todo){
        //     setTodos(todo.json())
        // })
    },[id])

  

    console.log(todos[0])
    console.log(todos.title)

  return (
    <div>
        <h1>{todos.title}</h1>
        <h5>{todos.description}</h5>
    </div>
  )
}

export default Todo