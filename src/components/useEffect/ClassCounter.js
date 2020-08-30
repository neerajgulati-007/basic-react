import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0};
  }

  updateCounter() {
    this.setState({counter: this.state.counter + 1});
  }

  componentDidMount() {
    // Effect to be implemented: Update title based on the count
    // In class components we will use CDM, CDU to implement this effect
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.counter} times`;
  }

  render() {
    return (
      <div>
          <div>
            Class Component: 
          </div>
          <span className="mr">
              You clicked {this.state.counter} times
          </span>
          <button onClick={()=> this.updateCounter()}>
            Click me
          </button>
      </div>
    );
  }
}

export default Counter;