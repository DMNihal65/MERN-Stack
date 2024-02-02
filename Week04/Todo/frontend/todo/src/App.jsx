import { useState,useEffect } from 'react'

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios';
import { Hero } from './components/Hero';

function App() {

  //Set the state variable

  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos'); // Replace with your API endpoint
        setTodos(response.data.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  



  return (
    <div>
      <Hero/>
      <CreateTodo/>
      <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App
