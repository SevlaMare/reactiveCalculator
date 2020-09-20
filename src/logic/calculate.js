import Operate from './operate';

const Calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = { ...data }; // copy original for?

  if (buttonName === 'AC') return { total: 0, next: 0, operation: false };
  if (buttonName.match(/[0-9]/)) return { total: 0, next: buttonName, operation: false };

  if (buttonName === '.') {
    if (next) return { total, next: `${next}.`, operation };
    return { total, next: '0.', operation };
  }

  if (['+', '-', 'X', '÷', '%', '+/-'].includes(buttonName)) {
    result.operation = false;
    result.total = Operate(total, next, buttonName);
    result.next = 0;
  }

  return result;
};

export default Calculate;
