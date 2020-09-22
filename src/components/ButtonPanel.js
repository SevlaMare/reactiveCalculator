import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClickBP = buttonName => props.clickHandler(buttonName);

  return (
    <div className="flex flex-col btnPanel">
      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="AC" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="+/-" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="%" clickHandler={handleClickBP} />
        <Button buttonName="÷" clickHandler={handleClickBP} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="7" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="8" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="9" clickHandler={handleClickBP} />
        <Button buttonName="X" clickHandler={handleClickBP} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="4" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="5" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="6" clickHandler={handleClickBP} />
        <Button buttonName="-" clickHandler={handleClickBP} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" buttonName="1" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="2" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="3" clickHandler={handleClickBP} />
        <Button buttonName="+" clickHandler={handleClickBP} />
      </div>

      <div className="rowPanel">
        <Button color="#d3d3d3" wide="true" buttonName="0" clickHandler={handleClickBP} />
        <Button color="#d3d3d3" buttonName="." clickHandler={handleClickBP} />
        <Button buttonName="=" clickHandler={handleClickBP} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
