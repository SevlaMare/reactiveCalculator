import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const x1 = Big(numberOne);
  const x2 = Big(numberTwo);
  const result;

  if (x2 === 0) result = "Can't divide by zero";
  if (operation === '+') result = x1.plus(x2);
  if (operation === '-') result = x1.minus(x2);
  if (operation === 'X') result = x1.multiply(x2);
  if (operation === '/') result = x1.div(x2);
  if (operation === '%') { return result = x1.div(x2) / 100; }
  if (operation === '+/-') result = x1.multiply(-1);

  return result;
};

export default Operate;
