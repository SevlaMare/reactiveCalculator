import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;

  return (
    <button type="button">
      { buttonName }
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
};

export default Button;
