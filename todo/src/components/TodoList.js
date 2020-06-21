import React from "react";

 const TodoList = (props) => {
    console.log(props.todos)

    return (
        <div>
        {props.todos.map(item => (
         <p onClick={() => props.toggleComplete(item.id)}>{item.item}</p>
        ))}
        </div>
    )
}

export default TodoList;