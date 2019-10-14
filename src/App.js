import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from './actions/todoActions';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <section>
          <Todos todos={props.todos} deleteTodo={props.deleteTodo}/>
        </section>
        <section>
          <AddTodo addTodo={props.addTodo}/>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);