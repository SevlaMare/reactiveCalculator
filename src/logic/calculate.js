import Operate from './operate';

const Calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === 'AC') return { total: 0, next: '', operation: '' };

  if (buttonName === '+/-') {
    if (next === "") { total = Operate(total, 1, '+/-') }
    else { next = Operate(next, 1, '+/-') }
  }

  if (buttonName === '=') {
    if (operation && total && next) return {
      total : Operate(total, next, operation), next : '', operation : ''
    }
  }

  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (operation && total && next) {
      operation = false;
      total = Operate(total, next, buttonName);
      next = 0;
    }
  }

  return { total, next, operation }
};

export default Calculate;