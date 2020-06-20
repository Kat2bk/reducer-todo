

export const initialState = {
    todos: [
        {
            item: "Wash Clothes",
            completed: false,
            id: Date.now()
        }
    ]
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
            case "CLEAR_TASK":
                return state.filter(todo => !todo.completed)
            case "TOGGLE_COMPLETE":
                const newState = state.map(todo => {
                    if(todo.id === action.payload) {
                        return !todo.completed;
                    } else {
                        return todo;
                    }
                });
                return [...state, newState];
            default:
                return state
    }
}