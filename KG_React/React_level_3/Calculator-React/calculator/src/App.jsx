import { useState } from 'react';

import './App.css';
import React from "react";
import DisplayInput from './components/DisplayInput';
import ButtonContainer from './components/ButtonContainer';

function App() {
  let [calVal, setcalVal] = useState("");
  let [ans, setAns] = useState(""); // Use state for 'ans'

  let onButtonClicked = (bText) => {
    if (bText === "C") {
      setcalVal("");
    } else if (bText === "=") {
      try {
        const result = eval(calVal);
        // setcalVal(`${calVal} = ${result}`); 
        setcalVal(`${result}`);
        setAns(result);

      } catch (error) {
        setcalVal(`Error ; ${error}`);
      }
    } else if (bText === "Ans") {
      if (ans) {
        const newDisplayValue = calVal + ans;
        setcalVal(`${calVal}(${ans})`);
      } else {
        setcalVal(`Error`); // If there's no previous expression, show an error
      }
    }else if (bText === "n!") {
      // Updated regex to match numbers with optional parentheses
      let lastNumberMatch = calVal.match(/(?:\((\d+)\)|(\d+))(?!.*\d)/); // Match (n) OR n
      if (lastNumberMatch) {
        // Check if the matched number is inside parentheses or not
        let lastNumber = lastNumberMatch[1] || lastNumberMatch[2]; // Get the number from either capture group
        let n = parseInt(lastNumber); 
        if (!isNaN(n)) {
          function factorial(n) {
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
              result *= i;
            }
            return result;
          }
          let result = factorial(n);
    
          // Replace the last number (or (lastNumber)) with its factorial in the calVal string
          let newCalVal = calVal.replace(new RegExp(`(?:\\(${lastNumber}\\)|${lastNumber})$`), result);
          setcalVal(`(${newCalVal})`); // Set the updated expression
        } else {
          setcalVal("Error in n!"); // If it's not a number, show an error
        }
      }
    }
     else if (bText === "del") {
      if (calVal.length > 0) {
        setcalVal(calVal.slice(0, -1));
      }
    } else {
      const newDisplayValue = calVal + bText;
      setcalVal(newDisplayValue);
    }

    console.log(`button clicked from app's outer func is ${bText}`);
  }

  return (
    <div className='bg-black vh-100 mt-5'>
      <h1 className='text-center text-primary'>Calculator</h1>
      <div className="container calculator bg-dark col col-md-6 col-lg-4 mt-3 pb-5">
        <DisplayInput displayValue={calVal}></DisplayInput>
        <ButtonContainer onButtonClicked={onButtonClicked}></ButtonContainer>
      </div>
    </div>
  );
}

export default App;
