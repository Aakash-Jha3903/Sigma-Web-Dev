import React from 'react'

import Todohead from './components/Todohead'
import Inputs from './components/Inputs'
import Items from './components/Items'
import TodoItems from './components/TodoItems'

const App = () => {
  const todo_items_dict = [
    { "todo_name": "Organised-self-learning", "todo_date": "Now", "todo_time": "02:15 AM" },
    { "todo_name": "DSA.py", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
    { "todo_name": "React.js", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
    { "todo_name": "Run Freelancing", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
  ];

  return (
    <div className='bg-dark text-white' style={{ height: '100vh' }} >

      <center className='todo-container bg-dark text-white' >
        <Todohead />
        <Inputs />
        <TodoItems todo_items_att={todo_items_dict} />

      </center>

    </div>
  )
}

export default App
