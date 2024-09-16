import { useState } from 'react'
import './App.css'
import React from "react"
import FoodItems from './components/FoodItems'
import ErrorMessage from "./components/ErrorMessage"

function App() {
  let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira "]
  // let food_items =[]
  // let emptyMessage = food_items.length === 0 ? <h3>I am hungry.</h3> : null
  // if (food_items.length === 0){
  //   return <h3>I am hungry.</h3>;
  // }
  return (
    <React.Fragment>
      <div className="Healthy-food bg-dark text-white">
        <h1>Healthy Food</h1>
        {/* {emptyMessage} */} 
        {/* {food_items.length === 0 ? <h3>I am hungry.</h3> : null } */}
        {/* { <h3>I am hungry.</h3> && food_items.length === 0} */}
        
        <ErrorMessage items={food_items} />
        <FoodItems items={food_items} />

      </div>
    </React.Fragment>
  )
}

export default App
