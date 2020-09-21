import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <div className="flex justify-end display">
      <p>{result}</p>
    </div>
  );
};

// can accept string/number/bool wherever
Display.propTypes = {
  // result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
