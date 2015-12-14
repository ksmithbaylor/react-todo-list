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
      marginTop: '0',
      marginBottom: '0.2em'
    };

    return (
      <p style={style} onClick={this.toggleCompleted}>
        {this.props.text}
      </p>
    );
  }

  toggleCompleted = (event) => {
    this.setState({ completed: !this.state.completed });
  }
}
