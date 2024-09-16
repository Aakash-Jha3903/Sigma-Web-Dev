import React from 'react'
import Items from './Items'


const TodoItems = ({ todo_items_att }) => {
    return (
        <div className="item-container">
            {todo_items_att.map((x)=>(
                <Items todo_text={x.todo_name} todo_date={x.todo_date} todo_time={x.todo_time} />
            ))}
        </div>
    )
}

export default TodoItems
