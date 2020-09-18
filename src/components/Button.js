import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, color } = props;
  return (
    <button type="button"
      style={{ backgroundColor: color}}
    >
      { buttonName }
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
  color: 'orange',
};

export default Button;
