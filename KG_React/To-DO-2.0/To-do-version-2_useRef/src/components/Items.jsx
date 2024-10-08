import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

// function Items = () => {
const Items = ({ todo_text, todo_date, todo_time, onDeleteClick }) => {
  // let todo_text = "Practising Vite-React";
  // let todo_date = "15-09-2024"
  // let todo_time = "09:25 PM"

  return (
    <div className="row">
      <div className="col-4 my-2 ">
        {todo_text}

      </div>
      <div className="col-2 my-2 ">
        {todo_date}
      </div>
      <div className="col-2 mx-4 my-2 ">
        {todo_time}
      </div>

      <div className="col-3  d-flex ">
        <div className="d-grid gap-2 d-md-flex justify-content-center py-1 w-100">

          <button className="btn btn-primary me-md-2 px-100  w-100" type="button">
            <pre className="fs-5 m-0 d-flex justify-content-center align-items-center">
              Edit  <BiEdit className='fs-3 p-0' /> </pre>
          </button>


          <button className="btn btn-danger px-3 w-100" type="button"
            onClick={() => onDeleteClick(todo_text)}>
            <pre className="fs-5 m-0 d-flex justify-content-center align-items-center">
              <RiDeleteBinLine className='fs-3 p-0' /> Delete</pre>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Items
