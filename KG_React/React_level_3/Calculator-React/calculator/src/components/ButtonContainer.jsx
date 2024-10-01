import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonContainer = ({ onButtonClicked }) => {
  const buttonNames = ["C", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "(", ")", "0", "/", "^", "n!", ".", "%","Ans","del","=" ];

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="row button-container">
        {buttonNames.map((b, index) => (
          <div key={index} className="col-3 p-2">
            <button
              // onClick={()=> console.log(`button clicked from the buttonConatinerApp is  ${b}`)}
              onClick={() => onButtonClicked(b)}
              className="btn btn-primary w-100 h-100 d-flex justify-content-center align-items-center">
              {b}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
