import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map((todo, i) => (
      <Todo text={todo} key={i} />
    ));

    return (
      <ol>
        {todoItems}
      </ol>
    );
  }
}
