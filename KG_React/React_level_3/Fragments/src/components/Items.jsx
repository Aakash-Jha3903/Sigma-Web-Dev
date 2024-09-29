import React from 'react'
import styles from "./Items.module.css"

const Items = (props) => {
  // const handleBuyButton = () => {
  const handleBuyButton = (event) => {
    console.log(event)
    console.log(`buy button clicked ${props.food_items}`)
  }
  return (
    <div>
      <ul className=' list-unstyled' >
        <li className="list-group-items m-1 ">
          <span>{props.food_items}</span>
          <button className={`${styles.button} btn btn-primary rounded `}

          // All these below are working ......

          // onClick={()=> console.log(`buy button ${props.food_items}`)}   >
          // onClick={handleBuyButton}   >
          onClick={(event)=> handleBuyButton(event)}   >
          Buy</button>
        </li>
      </ul>

    </div >
  )
};

export default Items
