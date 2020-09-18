import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div>
      <Display />

      <div className="btnPanel">
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
