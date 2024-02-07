import { useEffect, useState } from 'react'

import './App.css'
import Todo from './components/Todo'
import Counter from './components/Counter'


function App() {
  const[ids, setIds] = useState()

 
    function handleChange(id){
      setIds(id)
      console.log(ids)
     }


     
    
    
  
  

  return (
    <>
      <button onClick={() => handleChange(1)}>1</button>
      <button  onClick={() => handleChange(2)}>2</button>
      <button  onClick={() => handleChange(3)}>3</button>
      <button  onClick={() => handleChange(4)}>4</button>
      <Todo id={ids}></Todo>
      <div>
        this is for the useMemo
        <Counter/>
      </div>
    </>
  )
}



export default App
