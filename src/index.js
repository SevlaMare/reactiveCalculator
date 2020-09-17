import React, { useState } from "react";
import ReactDOM from "react-dom";
import './css/style.css';

const Header = ({title}) => {
  return (
    <h1> Hi from ES6 {title} </h1>
  )
}

const Main = () => {
  const [title, setName] = useState('av');

  return (
    <Header title={ title }/>
  )
}

ReactDOM.render(<Main/>, document.querySelector("#app"));
