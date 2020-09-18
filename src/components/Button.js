import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, wide, color } = props;
  const handleClick = () => {
    console.log('wtf')
    props.clickHandler(props.name);
  }

  return (
    <button
      type="button"
      style={{
        backgroundColor: color,
        width: (wide ? '50%' : false),
      }}
      onClick={ handleClick }
    >
      { buttonName }
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
  wide: false,
  color: 'orange',
};

export default Button;
