import Operate from './operate';

const Calculate = (data, buttonName) => {
  const { total, next } = data;
  const result = { ...data };

  if (['+', '-', 'X', '÷', '%', '+/-'].includes(buttonName)) {
    result.operation = false;
    result.total = Operate(total, next, buttonName);
    result.next = 0;
  }

  if (buttonName === 'AC') return { total: 0, next: 0, operation: false };

  return result;
};

export default Calculate;
