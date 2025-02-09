import { useState, useEffect } from 'react'
import './App.css'
import React from "react"
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {






  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (todo.trim() == "") {
      alert("Please enter a task");
      return 
    }
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("");
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleChange = (e) => {
    // console.log(e);
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(x=>{
      return x.id === id;
    });
    let new_todos = [...todos];
    new_todos[index].isCompleted = !new_todos[index].isCompleted;
    setTodos(new_todos)


  }
  
  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item =>{ return item.id !== id; });
    setTodos(newTodos);

  }
  
  const handleDelete= (e, id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos);
    // saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-violet-100 min-h-[80vh]">
        <div className="addTodo">

          <h2 className='text-lg py-4 font-bold' >Add a Todo</h2>
          <input onChange={handleChange}  onKeyDown={handleKeyDown} value={todo} type="text" className='w-3/5' />
          <button onClick={handleAdd} type="button" className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white text-small font-bold rounded-md mx-6">Add</button>
        </div>


        <div className="todos">

        {todos.length ===0 && <div className='m-5 font-bold'>No Todos to display</div> }
        {todos.length >0 && <h2 className='text-lg  font-bold my-3' >Your Todos</h2> }

          {todos.map(item => {

            return (   
            <div key={item.id} className="todo flex justify-between w-3/4 my-3">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
              <div className={item.isCompleted ? "line-through": ""}>{item.todo}</div>

              <div className="buttons">
                <button  onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white text-small  rounded-md mx-1' >Edit</button>
                <button  onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white text-small  rounded-md mx-1' >Delete</button>
              </div>

            </div>)
          })}

        </div>
      </div>
    </>
  )
}

export default App
