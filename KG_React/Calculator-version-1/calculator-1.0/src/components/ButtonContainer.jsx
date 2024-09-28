import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonContainer = () => {
  const buttonNames = ["C", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "/", ".", "0", "(", ")", "^", "="];

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="row button-container">
        {buttonNames.map((x, index) => (
          <div key={index} className="col-3 p-2">
            <button className="btn btn-primary w-100 h-100 d-flex justify-content-center align-items-center">
              {x}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
