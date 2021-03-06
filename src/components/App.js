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
    const newData = Calculate(this.state, buttonName);
    this.setState(newData);
  }

  render() {
    const { next, total } = this.state;

    return (
      <div id="calc" className="flex flex-col align-center">
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClickAPP} />
      </div>
    );
  }
}

export default App;
