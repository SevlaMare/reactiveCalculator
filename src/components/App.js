import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClickAPP = this.handleClickAPP.bind(this);
  }

  handleClickAPP(buttonName) {
    this.setState(Calculate(this.state, buttonName));
    console.log(this.state);
  }

  render() {
    return (
      <div id="calc" className="flex flex-col align-center">
        <Display result={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClickAPP} />
      </div>
    );
  }
}

export default App;
