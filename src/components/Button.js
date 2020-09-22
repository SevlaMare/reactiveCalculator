import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, wide, color } = props;
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <button
      type="button"
      style={{
        backgroundColor: color,
        width: (wide ? '50%' : false),
      }}
      onClick={() => handleClick(props.buttonName)}
    >
      { buttonName }
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: '',
  wide: false,
  color: 'orange',
};

export default Button;
