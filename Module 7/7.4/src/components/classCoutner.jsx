import React, { Component } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={incrementCount}>Click me</button>
      </div>
    );
  }
}

export default Counter;
