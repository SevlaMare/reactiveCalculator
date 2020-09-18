import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import PropTypes from 'prop-types';

const Header = props => {
  const { title } = props;

  return (
    <h1>
      Hi from ES6
      {title}
    </h1>
  );
};

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

const Main = () => {
  const [title] = useState('av');

  return (
    <Header title={title} />
  );
};

ReactDOM.render(<Main />, document.querySelector('#app'));
