import React from 'react';
import {connect} from 'react-redux';
import {toggleStatus, deleteTodo} from './actions/todoActions';

const Todos = ({todos, view, toggleStatus, deleteTodo}) => {

    //message to be displayed when there are no todo items
    const message = view === 'completed' ? <p id="no_todo">Nothing here, please check the pending tasks.</p>
                                         : <p id="no_todo">You have nothing to do, yay!</p>

    //creating an array of all the todo items to be displayed
    const todoList = todos.length ?
    todos.map(todo => 
    <div className="todo" key={todo.id}>
        <span>{todo.task}</span>
        <button title="Click to update status" onClick={() => {toggleStatus(todo)}} className={`completed_${todo.completed}`}>&#10003;</button>
        <button title="Click to delete" onClick={() => {deleteTodo(todo)}}>x</button>
    </div>) 
    : message;
    
    return (
        <div className="todos">
            {todoList}
        </div>
    );
}

//getting data from the redux store
//the todo items requested depend on the view(all/completed/pending)
const mapStateToProps = state => {
    switch(state.view) {
        case 'completed': return {
            todos: state.todos.filter(todo => todo.completed),
            view: state.view
        }

        case 'pending': return {
            todos: state.todos.filter(todo => !todo.completed),
            view: state.view
        }

        default: return {
            todos: state.todos,
            view: state.view
        }
    }
  }

//dispatching actions to be performed by the redux reducer, the actions here are:
//deleting a todo item from the state in the redux store
//and toggling the status of a todo item (completed/pending)
const mapDispatchToProps = dispatch => {
    return {
        toggleStatus: (todo) => dispatch(toggleStatus(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);