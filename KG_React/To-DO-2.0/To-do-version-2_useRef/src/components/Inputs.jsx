// import React from 'react'
import React, { useRef } from 'react';
import { SiCreatereactapp } from "react-icons/si";


const Inputs = ({ onNewItem }) => {

    // const [todo_name, set_todo_name] = useState("");   
    // const [todo_date, set_todo_date] = useState("");  
    // const [todo_time, set_todo_time] = useState("");   

    // const handleNameChange = (event) => {
    //     set_todo_name(event.target.value);
    //     noOfUpdates.current += 1;
    // };
    // const handleDateChange = (event) => {
    //     set_todo_date(event.target.value);
    //     console.log(`noOfUpdates are : ${noOfUpdates.current}`)    
    // };
    // const handleTimeChange = (event) => {
    //     set_todo_time(event.target.value);
    // };

    const todo_nameElement = useRef();
    const todo_dateElement = useRef();
    const todo_timeElement = useRef();
 

    const handleAddbutton = (event) => {
        event.preventDefault();
        const todo_name = todo_nameElement.current.value;
        const todo_date = todo_dateElement.current.value;
        const todo_time = todo_timeElement.current.value;
        console.log(`name : ${todo_name} date: ${todo_date} time:  ${todo_time}`);

        todo_nameElement.current.value = "";
        todo_dateElement.current.value = "";
        todo_timeElement.current.value = "";
        

        onNewItem(todo_name, todo_date, todo_time);

        // set_todo_name("");
        // set_todo_date("");
        // set_todo_time("");

    }
    return (
        <div className="row mt-2">
            <div className="col-4 my-2">
                <input type="text" placeholder='Enter your task : '
                    // value={todo_nameElement}
                    // onChange={handleNameChange}
                    ref={todo_nameElement}
                     />
            </div>
            <div className="col-2 mx-4 my-2">
                <input type="date"
                    // value={todo_dateElement}
                     // onChange={handleDateChange}
                     ref={todo_timeElement}
                     /></div>

            <div className="col-2 my-2 ">
                <input type="time"
                    // value={todo_timeElement}
                    // onChange={handleTimeChange} 
                    ref={todo_dateElement}
                    /></div>

            <div className="col-3">
                <div className="d-grid d-md-block my-2">
                    <button
                        className="btn btn-success w-100 p-0" 
                        type="button"
                        onClick={handleAddbutton}
                        style={{ height: '36px' }} 
                        >
                        <pre className="fs-4 m-0 d-flex justify-content-center align-items-center">
                            Add <SiCreatereactapp className="fs-2 ms-2" />
                        </pre>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inputs
