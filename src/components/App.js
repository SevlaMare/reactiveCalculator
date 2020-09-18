import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

/* eslint-disable  no-unused-vars */
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  render() {
    return (
      <div id="calc" className="flex flex-col align-center">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
