import React from "react";
// import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from "./components/ErrorMessage";
import Container from './components/Container';
import FoodInput from "./components/FoodInput";

function App() {
  let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira "];

  return (
    <React.Fragment>
      {/* Full-screen flexbox to center content */}
      <div className="d-flex justify-content-center align-items-center  ">
        <Container>
          <div className="Healthy-food bg-dark text-white border border-success w-50 p-4 text-center">
            <h1 className='m-3'>Healthy Food</h1>

            <FoodInput/>
            
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
