import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  let x1; let x2; let result;

  if (numberOne) { x1 = Big(numberOne); }
  if (numberTwo) { x2 = Big(numberTwo); }

  if (operation === '+') result = x1.plus(x2);
  if (operation === '-') result = x1.minus(x2);
  if (operation === 'X') result = x1.times(x2);

  if (operation === '÷') {
    if (x2.toString() === '0') result = "Can't divide by zero";
    else result = x1.div(x2);
  }

  if (operation === '%') result = x1.div(100);
  if (operation === '+/-') result = x1.times(-1);

  return result.toString();
};

export default Operate;
