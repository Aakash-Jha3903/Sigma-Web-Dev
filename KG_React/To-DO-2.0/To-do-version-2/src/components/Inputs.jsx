// import React from 'react'
import React, { useState } from 'react'

const Inputs = ({onNewItem}) => {

    const [todo_name,set_todo_name] = useState();
    const [todo_date,set_todo_date] = useState();
    const [todo_time,set_todo_time] = useState();

    const handleNameChange = (event) => {
        set_todo_name(event.target.value);
    };
    const handleDateChange = (event) => {
        set_todo_date(event.target.value);
    };
    const handleTimeChange = (event) => {
        set_todo_time(event.target.value);
    };
    
    const handleAddbutton = ()=>{
        onNewItem(todo_name,todo_date,todo_time);
        
        set_todo_name("");
        set_todo_date("");
        set_todo_time("");

    }



    return (
        <div className="row mt-2">
            <div className="col-4 my-2">
                <input type="text" placeholder='Enter your task : ' 
                value={todo_name}
                onChange={handleNameChange} />
            </div>
            <div className="col-2 mx-4 my-2">
                <input type="date" 
                value={todo_date}
                onChange={handleDateChange} /></div>

            <div className="col-2 my-2 ">
                <input type="time" 
                value={todo_time}
                onChange={handleTimeChange} /></div>

            <div className="col-3">
                <div className="d-grid  d-md-block my-2">
                    <button className="btn btn-success w-100 py-1" type="button"
                    onClick={handleAddbutton} >
                        Add</button>
                </div>
            </div>
        </div>
    )
}

export default Inputs
