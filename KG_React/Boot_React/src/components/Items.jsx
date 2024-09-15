import React from 'react'


const Items = () => {
  // function Items = () => {
  let text = "Practising Vite-React";
  let date = "15-09-2024"
  let time = "09:25 PM"

  return (
    <div className="row">
      <div className="col-4 my-2 ">
        {text}

      </div>
      <div className="col-2 my-2 ">
        {date}
      </div>
      <div className="col-2 mx-4 my-2 ">
        {time}
      </div>
      <div className="col-3  d-flex ">
        <div className="d-grid gap-2 d-md-flex justify-content-center py-1 w-100">
          <button className="btn btn-primary me-md-2 px-100  w-100" type="button">Edit</button>
          <button className="btn btn-danger px-3 w-100" type="button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Items
