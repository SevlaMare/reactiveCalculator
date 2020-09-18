import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="flex flex-col btnPanel">
    <div className="rowPanel">
      {['AC', '+/-', '%', '÷'].map(element =>
        <Button key={element.id} buttonName={element.toString()} />)}
    </div>

    <div className="rowPanel">
      {['7', '8', '9', 'X'].map(element => <Button key={element.id} buttonName={element.toString()} />)}
    </div>

    <div className="rowPanel">
      {['4', '5', '6', '-'].map(element => <Button key={element.id} buttonName={element.toString()} />)}
    </div>

    <div className="rowPanel">
      {['1', '2', '3', '+'].map(element => <Button key={element.id} buttonName={element.toString()} />)}
    </div>

    <div className="rowPanel">
      {['0', '.', '='].map(element => <Button key={element.id} buttonName={element.toString()} />)}
    </div>
  </div>
);

export default ButtonPanel;
