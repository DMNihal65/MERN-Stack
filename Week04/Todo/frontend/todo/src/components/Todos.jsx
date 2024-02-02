// todo is the array that is appased as the ptops
import axios from 'axios';

export function Todos({todos}){
    async function changeCompleted(todo){
       const mark   = await axios.put(`http://localhost:3000/completed`, {id : todo})
       window.location.reload();
    }

    return <div>
        {
            todos.map(function(todo){
            return (
            <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => changeCompleted(todo._id)}>
                {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
            </div>
            )
            
                
            
        })
        }
    </div>
    
        
       
    
}