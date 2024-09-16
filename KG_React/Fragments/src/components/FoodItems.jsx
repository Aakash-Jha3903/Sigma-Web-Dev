import React from 'react'
import Items from './Items'

const FoodItems = ({items}) => {
    let food_items = ["Kela", "sheb", "angur ", "tarbuj", "khira "]
  return (
    <div>
        <ul className="list-group">
          {items.map((item)=> (
            // <li key={item} food_items={item} ></li>
            <Items key={item} food_items={item} ></Items>
          ))}
        </ul>
      
    </div>
  )
}

export default FoodItems
