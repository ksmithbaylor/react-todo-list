import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

export default class App extends React.Component {
  state = {
    todos: []
  }

  render() {
    return (
      <div style={style}>
        <AddTodoForm onSubmit={this.handleAddTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

  handleAddTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
}

const style = {
  fontFamily: '"Roboto", Arial, sans-serif'
}
