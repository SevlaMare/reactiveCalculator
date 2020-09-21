import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // let result = Calculate(this.state, buttonName);
    // this.setState({ ...result });

    this.setState(Calculate(this.state, buttonName));

    // this.setState({total: 321})

    console.log(this.state);
  }

  render() {
    return (
      <div id="calc" className="flex flex-col align-center">
        <button onClick={ this.handleClick }>TEST</button>

        <Display result={ this.state.next || this.state.total || '0' } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
