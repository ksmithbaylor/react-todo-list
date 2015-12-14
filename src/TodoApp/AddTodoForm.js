import React from 'react';

export default class AddTodoForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="newTodo"></input>
        <input type="submit" value="Add"></input>
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.refs.newTodo.value);
    this.refs.newTodo.value = '';
  }
}
