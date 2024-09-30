import React, { useState } from 'react'
import Items from './Items'

const FoodItems = ({ items }) => {
  // let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira"]
  let [active_items, set_active_items] = useState([]);
  let onBuyButton = (item,event) => {
    let new_items = [...active_items,item];
    set_active_items(new_items)
  }
    return (
      <div>
          <ul className="list-group list-unstyled  ">
            {items.map((x,index)=> (
              <Items key={index} food_items={x} 
              bought={active_items.includes(x)}   //current item
              // handleBuyButton={() => console.log(` Buy ${x} is clicked`)}
              handleBuyButton={(event) => onBuyButton(x,event)}
              >{x} 
              </Items>
            ))}
          </ul>

      </div>
    )
  }

export default FoodItems
