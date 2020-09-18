import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const x1 = Big(numberOne);
  const x2 = Big(numberTwo);

  if (operation === '+') x1.plus(x2);
  if (operation === '-') x1.minus(x2);
  if (operation === 'X') x1.multiply(x2);
  if (operation === '/') x1.div(x2);
  if (operation === '%') x1.div(x2)/100;
};

export default Operate;
