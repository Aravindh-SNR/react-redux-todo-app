export const reducer = (state = {todos: []}, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            const newTodo = {id: state.todos.length + 1, task: action.payload};
            return {
                todos: [...state.todos, newTodo]
            };
        }

        case 'DELETE_TODO': {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id).map((todo, index) => {
                todo.id = index + 1;
                return todo;
            })
            return {
                todos: newTodos
            };
        }

        default: return state;
    }
}