import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <p>
      Hi from display {result}
    </p>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;