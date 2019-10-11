import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {

    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = todo.trim();
        if(task.length > 0) {
            addTodo(task);
            setTodo('');
        }
    }

    return (
        <div className="add-todo">
            <form onSubmit={handleSubmit}>
                <label>Add a task: </label>
                <input type="text" value={todo} onChange={handleChange}/>
                <button>Add todo</button>
            </form>
        </div>
    );
}

export default AddTodo;