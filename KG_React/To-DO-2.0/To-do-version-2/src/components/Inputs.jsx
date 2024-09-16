import React from 'react'

const Inputs = () => {
    return (
        <div className="row mt-2">
            <div className="col-4 my-2">
                <input type="text" placeholder='Enter your task : ' />
            </div>
            <div className="col-2 mx-4 my-2"><input type="date" /></div>
            <div className="col-2 my-2 "><input type="time" /></div>
            <div className="col-3">
                <div className="d-grid  d-md-block my-2">
                    <button className="btn btn-success w-100 py-1" type="button">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Inputs
