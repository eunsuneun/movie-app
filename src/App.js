import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('1 component First Creating: constructor');
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log('3 component First renderd : compopnentDidMount');
  }
  componentDidUpdate() {
    console.log('4 updated ! : componentDidUpdated');
  }
  componentWillUnmount() {
    console.log('5 component Will die : componentWillUnmount');
  }
  render() {
    console.log('2 component Re rendering : render');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
