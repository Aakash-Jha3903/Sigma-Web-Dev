import React from 'react'
import Items from './Items'

const FoodItems = ({ items }) => {
  let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira "]
    return (
      <div>
          <ul className="list-group list-unstyled  ">
            {items.map((x,index)=> (
              <Items key={index} food_items={x} handleBuyButton={() => console.log(` Buy ${x} is clicked`)} >{x} </Items>
            ))}
          </ul>

      </div>
    )
  }

export default FoodItems
