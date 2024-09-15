import React from 'react'


const BharatTime = () => {
    let current_time = new Date();
    return (
        <div>
            <p className='lead'>This is your current date & time : {current_time.toLocaleDateString()}
            {""} --{""} {current_time.toLocaleTimeString()}
            </p>
        </div>
    )
}

export default BharatTime
