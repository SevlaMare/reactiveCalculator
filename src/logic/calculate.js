import Operate from './operate';

const Calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === 'AC') return { total: 0, next: '', operation: '' };

  if (buttonName === '+/-') {
    if (next === "") { total = Operate(total, 1, '+/-') }
    else { next = Operate(next, 1, '+/-') }
  }

  return { total, next, operation }
};

export default Calculate;