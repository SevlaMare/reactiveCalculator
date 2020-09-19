import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const x1 = Big(numberOne);
  const x2 = Big(numberTwo);
  let result = '';

  if (operation === '+') result = x1.plus(x2);
  if (operation === '-') result = x1.minus(x2);
  if (operation === 'X') result = x1.times(x2);

  /* eslint eqeqeq: [1, "smart"] */
  if (x2 == 0) { return "Can't divide by zero"; }
  if (operation === '÷') result = x1.div(x2);

  if (operation === '%') result = x1.div(x2) / 100;
  if (operation === '+/-') result = x1.times(-1);

  return Number(result);
};

export default Operate;
