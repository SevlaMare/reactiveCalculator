import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  if(numberOne) { const x1 = Big(numberOne); }
  if(numberTwo) { const x2 = Big(numberTwo); }

  if (operation === '+') x1.plus(x2);
  if (operation === '-') x1.minus(x2);
  if (operation === 'X') x1.times(x2);

  if (x2.toString() === '0') "Can't divide by zero";
  if (operation === '÷') x1.div(x2);

  if (operation === '%') x1.div(x2)/100;
  if (operation === '+/-') x1.times(-1);

  return x1
};

export default Operate;
