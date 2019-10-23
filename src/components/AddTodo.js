import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

const AddTodo = ({addTodo}) => {

    const [todo, setTodo] = useState('');

    //setting the value of the todo item entered as this component's state
    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    //adding the todo item to the state in the redux store
    const handleSubmit = (event) => {
        event.preventDefault();
        const task = todo.trim();
        if(task.length > 0) {
            addTodo(task);
            setTodo('');
        }
    }

    return (
        <div className="add_todo">
            <form onSubmit={handleSubmit}>
                <label>Add a task: </label>
                <input type="text" value={todo} onChange={handleChange}/>
                <button>Add todo</button>
            </form>
        </div>
    );
}

//dispatching the action of adding the todo item to the state in the redux store
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);