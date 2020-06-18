import React from "react";

 const TodoList = (props) => {
    console.log(props.todos.todos)
    return (
        <div>
        {props.todos.todos.map(item => {
            return <p>{item.item}</p>
        })}
        </div>
    )
}

export default TodoList;