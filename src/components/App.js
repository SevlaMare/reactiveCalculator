import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div id="calc" className="flex flex-col align-center">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
