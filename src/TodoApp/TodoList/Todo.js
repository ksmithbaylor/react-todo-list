import React from 'react';

export default class Todo extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}
