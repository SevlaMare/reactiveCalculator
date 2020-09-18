import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const handleClick = (buttonName) => {
    console.log("ButtonPanel run ok");
    return props.clickHandler(buttonName);
  }

  return (
    <div className="flex flex-col btnPanel">
      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="AC" clickHandler={ handleClick } />
        <Button color="#d3d3d3" buttonName="+/-" />
        <Button color="#d3d3d3" buttonName="%" />
        <Button buttonName="÷" />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="7" />
        <Button color="#d3d3d3" buttonName="8" />
        <Button color="#d3d3d3" buttonName="9" />
        <Button buttonName="X" />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="4" />
        <Button color="#d3d3d3" buttonName="5" />
        <Button color="#d3d3d3" buttonName="6" />
        <Button buttonName="-" />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="1" />
        <Button color="#d3d3d3" buttonName="2" />
        <Button color="#d3d3d3" buttonName="3" />
        <Button buttonName="+" />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" wide="true" buttonName="0" />
        <Button color="#d3d3d3" buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
