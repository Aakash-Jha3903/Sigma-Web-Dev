import React, { useState } from "react";
// import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from "./components/ErrorMessage";
import Container from './components/Container';
import FoodInput from "./components/FoodInput";

function App() {
  // let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira "];

  // let textStateArr = useState("entering texts");
  // let textToShow = textStateArr[0]     // value of useState
  // let setTextState = textStateArr[1]   // method of useState

  let [textToShow, setTextState] = useState("entering texts");
  //   value of useState , method of useState

  // console.log(`Current value of textState is : ${textToShow}`)

  let [food_items, set_food_items] = useState(["Raita", "Dahi"]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let new_food_items_element = event.target.value;
      if (new_food_items_element.trim() == "") {
        alert("Please enter a food item");
        return 
      }
      let new_food_items = [...food_items, new_food_items_element]
      set_food_items(new_food_items)
      event.target.value = '';
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  return (
    <React.Fragment>
      {/* Full-screen flexbox to center content */}
      <div className="d-flex justify-content-center align-items-center  ">
        <Container>
          <div className="Healthy-food bg-dark text-white border border-success w-50 p-4 text-center">
            <h1 className='m-3'>Healthy Food</h1>

            <FoodInput handleOnKeyDown={OnKeyDown} />
            <p>{textToShow}</p>

            <FoodItems items={food_items} />
            <ErrorMessage items={food_items} />
          </div>
        </Container>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Container>
          <p className='mt-3 w-50 text-center'>
            <strong>Note:</strong> In a real-world application, you would probably fetch the food items from a server or a database, and then pass the fetched data to the FoodItems component. The ErrorMessage component would also be updated accordingly. This example is for demonstration purposes only.
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
