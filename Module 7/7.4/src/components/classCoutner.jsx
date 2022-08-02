import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log('component will mount here :)');
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

export default ClassCounter;
