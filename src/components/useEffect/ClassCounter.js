import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, name: ''};
  }

  updateCounter() {
    this.setState({counter: this.state.counter + 1});
  }

  setName(name) {
    this.setState({name})
  }

  componentDidMount() {
    // Effect to be implemented: Update title based on the count
    // In class components we will use CDM, CDU to implement this effect
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // Currently the check is not conditional, the title gets changed after
    // every rerender even though the we haven't set the counter
    //Ex. check the console

    console.log("Updating title")
    document.title = `Clicked ${this.state.counter} times`;
  }

  render() {
    return (
      <div>
          <div>
            Class Component: 
          </div>
          <div className="mb">
            <input type="text" onChange={(e) => this.setName(e.target.value)} />
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