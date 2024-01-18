import { useState } from 'react'
import './App.css'
//For the Dynamic Website
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <p>Hi There</p>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App
