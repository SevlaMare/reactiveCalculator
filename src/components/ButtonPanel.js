import React from 'react';
import Button from './Button';

const buttons = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'X',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
]

const ButtonPanel = () => {
  return (
    buttons.map((element, index) => {
      return <Button buttonName={element.toString()}/>
    })
  )
}

export default ButtonPanel;