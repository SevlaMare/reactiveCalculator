import Operate from './operate';
/* eslint-disable no-param-reassign */

const Calculate = ({ total, next, operation }, buttonName) => {
  if (String(buttonName).match(/[0-9]/)) {
    if (!operation && total) total = '';
    if (!next) { next = buttonName; } else { next += buttonName; }
  }

  if (buttonName === '.') {
    if (!next) { if (!total.includes('.')) total += '.'; }
    if (!next.includes('.')) next += '.';
  }

  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    total = total === "Can't divide by zero" ? '0' : total;
    if (operation && total && next) {
      total = Operate(total, next, operation);
      next = '';
      operation = buttonName;
    } else {
      if (!total) total = next;
      operation = buttonName;
      next = '';
    }
  }

  if (buttonName === '=') {
    if (operation && total && next) {
      return { total: Operate(total, next, operation), next: '', operation: '' };
    }
  }

  if (buttonName === '+/-') {
    if (next === '') { total = Operate(total, null, '+/-'); } else {
      next = Operate(next, null, '+/-');
    }
  }

  if (buttonName === '%') {
    if (!next) { total = Operate(total, null, buttonName); } else {
      next = Operate(next, null, buttonName);
    }
  }

  if (buttonName === 'AC') return { total: '', next: '', operation: '' };

  return { total, next, operation };
};

export default Calculate;
