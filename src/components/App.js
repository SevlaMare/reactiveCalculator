import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  handleClick() {
    // this.setState(Calculate(this.state, buttonName));
    console.log("App run")
  }

  render() {
    return (
      <div id="calc" className="flex flex-col align-center">
        <Display result={this.state.total || this.state.next || '0'} />
        {/* this pq e um metodo */}
        <ButtonPanel clickHandler={ this.handleClick }/>
      </div>
    );
  }
}

export default App;
