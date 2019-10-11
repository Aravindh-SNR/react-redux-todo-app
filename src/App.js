import React, {useState} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {id: todos.length + 1, task: todo};
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (todo) => {
    const newTodos = todos.filter(item => item.id !== todo.id).map((todo, index) => {
      todo.id = index + 1;
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <section>
          <Todos todos={todos} deleteTodo={deleteTodo}/>
        </section>  
        <section>
          <AddTodo addTodo={addTodo}/>
        </section>
      </main>
    </div>
  );
}

export default App;