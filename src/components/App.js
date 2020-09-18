import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

/* eslint-disable  no-unused-vars */
import Calculate from '../logic/calculate';

function App() {
  return (
    <div id="calc" className="flex flex-col align-center">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
