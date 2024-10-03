import React from 'react'
import { useState } from "react";

import Todohead from './components/Todohead'
import Inputs from './components/Inputs'
import Items from './components/Items'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'

const App = () => {
  const initial_todo_items_dict = [
    { todo_name: "Organised-self-learning", "todo_date": "Now", "todo_time": "02:15 AM" },
    { todo_name: "DSA.py", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
    { todo_name: "React.js", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
    { todo_name: "Run Freelancing", "todo_date": "15-09-2024", "todo_time": "02:15 AM" },
  ];

  const [todo_items, set_todo_items] = useState([]);
  // const [todo_items, set_todo_items] = useState(initial_todo_items_dict);

  const handleNewItem = (item_name, item_due_date, item_due_time) => {
    console.log(`New item added is ${item_name} , Date: ${item_due_date} , Time: ${item_due_time}  `)
    if (!item_name || item_name.trim() === "") {
      alert("Task name cannot be empty");
      return;
    }
    const new_todo_items = [...todo_items,
    {
      todo_name: item_name,
      todo_date: item_due_date,
      todo_time: item_due_time
    },
    ];
    set_todo_items(new_todo_items);


  };
  const handleDeleteItem = (todo_item_name) => {
    const new_todo_items = todo_items.filter((x) => x.todo_name !== todo_item_name);
    set_todo_items(new_todo_items);
    console.log(`item deleted : ${todo_item_name}`)
  };

  return (
    <div className='bg-dark text-white' style={{ height: '100vh' }} >

      <center className='todo-container bg-dark text-white' >
        <Todohead />
        {todo_items.length === 0 && <WelcomeMessage />}
        <Inputs onNewItem={handleNewItem} />
        <TodoItems todo_items_att={todo_items}
          onDeleteClick={handleDeleteItem} />

      </center>

    </div>
  )
}

export default App
