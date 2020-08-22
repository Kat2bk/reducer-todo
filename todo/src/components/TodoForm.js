import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/reducer";
import TodoList from "./TodoList";

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setnewTodo] = useState("");

    const handleChanges = event => {
        setnewTodo(event.target.value);
    }

    const clearTask = () => {
        dispatch({type: "CLEAR_TASK"})
    }

    const addTodo = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {item: newTodo, completed: false, id: Date.now()}
        })
        setnewTodo('');
    }

    const toggleComplete = (todoNumber) => {
        dispatch({type: "TOGGLE_COMPLETE", payload: todoNumber})
    }

    return (
        <div>
            <form className="form-box">
                <input className="input" type="text" name="todo" onChange={handleChanges} />
            </form>
            <TodoList todos={state.todos} toggleComplete={toggleComplete}/>
            <button onClick={addTodo} className="btn">Add Task</button>
            <button onClick={clearTask} className="btn">Clear Task</button>
        </div>
    )
}

export default TodoForm;