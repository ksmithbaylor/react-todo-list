import React from 'react';

export default class Todo extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired
  }

  state = {
    completed: false
  }

  render() {
    const style = {
      textDecoration: this.state.completed ? 'line-through' : undefined,
      cursor: 'default'
    };

    return (
      <li
        style={style}
        onClick={this.toggleCompleted}
      >
        {this.props.text}
      </li>
    );
  }

  toggleCompleted = (event) => {
    this.setState({ completed: !this.state.completed });
  }
}
