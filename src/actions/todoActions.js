//action to add a todo item
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

//action to delete a todo item
export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

//action to toggle the value of 'completed' on a todo item, the value will be either true or false
export const toggleStatus = (todo) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: todo
    }
}

//action to toggle the view based on the user input
//the user can see all the items or just the completed or pending items
export const toggleView = (view) => {
    return {
        type: 'TOGGLE_VIEW',
        payload: view
    }
}