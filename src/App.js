import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import ToggleStatus from './ToggleStatus';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <section>
          <Todos/> {/* section to display all the todo items */}
        </section>
        <section>
          <AddTodo/> {/* form to add new todo items */}
        </section>
        <section>
          <p className="status_heading">Track tasks by status</p>
          <ToggleStatus/> {/* section to toggle view and see todo items based on their completion status */}
        </section>
      </main>
    </div>
  );
}

export default App;