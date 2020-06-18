

export const initialState = {
    todos: [
        {
            item: "",
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
            return {

            }
            default:
            return state
    }
}