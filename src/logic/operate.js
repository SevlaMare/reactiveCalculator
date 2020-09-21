import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  if(numberOne) { const x1 = Big(numberOne); }
  if(numberTwo) { const x2 = Big(numberTwo); }
  let result;

  if (operation === '+') result = x1.plus(x2);
  if (operation === '-') result = x1.minus(x2);
  if (operation === 'X') result = x1.times(x2);

  if (operation === '÷') {
    if (x2.toString() === '0') result = "Can't divide by zero";
    return result = x1.div(x2);
  }

  if (operation === '%') {
    if (x2.toString() === '0') result = "Can't divide by zero";
    return x1.div(x2)/100;
  }

  if (operation === '+/-') result = x1.times(-1);

  return result.toString()
};

export default Operate;
