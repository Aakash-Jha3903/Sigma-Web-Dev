import { useState } from 'react'

import './App.css'
import React from "react"
import DisplayInput from './components/DisplayInput'
import ButtonContainer from './components/ButtonContainer'
// import styles from "./App.module.css"

function App() {

  let [calVal, setcalVal] = useState("")
  // let onButtonClicked = (bText) => { console.log(bText)}
  let ans = ""
  let onButtonClicked = (bText) => {
    if (bText == "C") {
      setcalVal("");   
    }
    else if (bText == "=") {
      try {
        const result = eval(calVal); 
        setcalVal(`${calVal} is  ${result}`); 

        console.log(`= wala ${calVal} `)
        console.log(`= wala ${result} `)
        ans = result;
        console.log(` ans is  ${ans} `)

        // let ans = calVal.toString();
        // lastExpression = calVal.toString();
      } catch (error) {
        setcalVal(`Error ; ${error}`); 
      }
    }
    else if (bText == "Ans") {
      // Set the display to the value of the last expression
      // let lastExpressionMatch = calVal.match(/(\d+)(?!.*\d)/); // Find the last expression in the string
      // if (lastExpressionMatch) {
      // let lastExpression = lastExpressionMatch[0]; // The expression we want to display
      // setcalVal(lastExpression);
      if (ans) {
        const newDisplayValue = calVal + ans;
        setcalVal(`${newDisplayValue} ~ (${ans})`); // Display the last expression in parentheses
        // setcalVal(newDisplayValue);
      }
      else{
        setcalVal(` Ans anhi aaya `); // If there's no previous expression, show an error
      }
    }
    else if (bText == "n!") {
      bText = "!"
      let lastNumberMatch = calVal.match(/(\d+)(?!.*\d)/); // Find the last number in the string
      if (lastNumberMatch) {
        let lastNumber = lastNumberMatch[0]; // The number we want to factorialize
        let n = parseInt(lastNumber); // Convert to integer
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

          // Replace the last number with its factorial in the calVal string
          let newCalVal = calVal.replace(new RegExp(`${lastNumber}$`), result);
          setcalVal(`(${newCalVal})`); // Set the updated expression
        }
        else {
          setcalVal("Error in n!"); // If it's not a number, show an error
        }
      }
    }
    else if (bText == "del") {
      if (calVal.length > 0) {
        setcalVal(calVal.slice(0, -1))
      }
    }

    else {
      const newDisplayValue = calVal + bText;
      setcalVal(newDisplayValue);
    }

    console.log(`button clicked from app's outer func is ${bText}`);
  }

  return (
    <div className='bg-black vh-100 mt-5' >
      <h1 className='text-center text-primary  ' >Calculator</h1>
      <div className=" container calculator bg-dark col col-md-6 col-lg-4 mt-3 pb-5 " >
        <DisplayInput displayValue={calVal} ></DisplayInput>
        {/* <ButtonContainer onButtonClicked={(bText)=>console.log(`button clicked from app's in-line func is ${bText}`)} ></ButtonContainer> */}
        <ButtonContainer onButtonClicked={onButtonClicked} ></ButtonContainer>
      </div>
    </div>
  )
}

export default App
