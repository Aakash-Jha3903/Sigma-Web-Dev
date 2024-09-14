import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" >
        { /* <h1>Title of the card</h1>
        <p>Some text in the card</p> */ }
        <h1>{props.title}</h1>
        <img src="\src\components\coder-img.jpg" alt="" style={{border:"2px solid red"}}
        />
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
