import { Component } from 'react';

class CounterClass extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <>
        <h1>{this.props.counterDetails.name}</h1>
        <h2>{this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -
        </button>
      </>
    );
  }
}

export default CounterClass;
