import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ?
    todos.map((todo, index) => 
    <div className="todo" key={index}>
        <span>{todo.task}</span>
        <button title="Click to delete" onClick={() => {deleteTodo(todo)}}>x</button>
    </div>) :
    <p id="no-todo">You have nothing to do, yay!</p>
    
    return (
        <div className="todos">
            {todoList}
        </div>
    );
}

export default Todos;