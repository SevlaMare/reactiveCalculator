import Operate from './operate';
/* eslint-disable no-param-reassign */

const Calculate = ({ total, next, operation }, buttonName) => {
  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (operation && total && next) {
      operation = false;
      total = Operate(total, next, buttonName);
      next = 0;
    }
  }

  if (buttonName === '%') {
    if (!next) { 
      total = Operate(total, 1, buttonName);
      operation = false;
    } else {
      next = Operate(next, 1, buttonName);
      operation = false;
    }
  }

  if (buttonName === '+/-') {
    if (next === '') { total = Operate(total, 1, '+/-'); } else {
      next = Operate(next, 1, '+/-');
    }
  }

  if (buttonName === '.') {
    if (next) return { total, next: `${next}.`, operation: false };
    return { total, next: '0.', operation: false };
  }

  if (buttonName === '=') {
    if (operation && total && next) {
      return {
        total: Operate(total, next, operation), next: '', operation: '',
      };
    }
  }

  if (buttonName === 'AC') return { total: 0, next: '', operation: '' };

  return { total, next, operation };
};

export default Calculate;
