import React from 'react'

const DisplayInput = ({displayValue}) => {
    return (
            <textarea className='border border-success col-6 mb-2 p-2' 
            type="text" placeholder="Enter your expression" 
            value={displayValue}
            readOnly
            >
            </textarea>
    )
}

export default DisplayInput
