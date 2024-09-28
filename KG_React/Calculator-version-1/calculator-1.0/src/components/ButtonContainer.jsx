import React from 'react'

const ButtonContainer = () => {
    const buttonNames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return (
    // <div>
        <div className="button-container m-auto">
            {buttonNames.map(x => <button className="w-10 h-auto m-1 p-3" >{ x }</button>
            )}
           </div>
      
    // </div>
  )
}

export default ButtonContainer
