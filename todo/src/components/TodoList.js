import React from "react";

 const TodoList = (props) => {
    console.log(props.todos.todos)
    return (
        <div>
        {props.todos.todos.map(item => {
            return <p onClick={() => props.dispatch({type: "TOGGLE_COMPLETE", payload: item.id})}>{item.item}</p>
        })}
        </div>
    )
}

export default TodoList;