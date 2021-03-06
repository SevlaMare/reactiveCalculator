import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div className="flex flex-col btnPanel">
      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="AC" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="+/-" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="%" clickHandler={handleClick} />
        <Button buttonName="÷" clickHandler={handleClick} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="7" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="8" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="9" clickHandler={handleClick} />
        <Button buttonName="X" clickHandler={handleClick} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="4" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="5" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="1" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="2" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" wide="true" buttonName="0" clickHandler={handleClick} />
        <Button color="#d3d3d3" buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
