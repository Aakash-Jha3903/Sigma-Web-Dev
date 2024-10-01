import React from 'react'
import styles from "./Items.module.css"

const Items = ({ food_items, bought, handleBuyButton }) => {
  // const Items = (props) => {
  // // const handleBuyButton = () => {
  // const handleBuyButton = (event) => {
  //   console.log(event)
  //   console.log(`buy button clicked ${props.food_items}`)
  // }
  return (
    <div>
      <ul className=' list-unstyled' >
        <li className={` d-flex justify-content-between  m-1 
        list-group-item ${bought && "active" } `}>
          <span>{food_items}</span>
          <button className={`${styles.button}  btn btn-success rounded `}

            // All these below are working, and ......
            // onClick={()=> console.log(`buy button ${props.food_items}`)}   >
            // onClick={handleBuyButton}   >
            // onClick={(event) => handleBuyButton(event)}   >

            // these above commented codes are from the previous fragment-project .................
            onClick={handleBuyButton}   >

            Buy</button>
        </li>
      </ul>

    </div >
  )
};

export default Items
