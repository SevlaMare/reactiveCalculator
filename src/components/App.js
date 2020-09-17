import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <React.Fragment>
      <h1>Hi from app</h1>

      <Display/>

      <div className="btnPanel">
        <ButtonPanel/>
      </div>
    </React.Fragment>
  );
}

export default App;