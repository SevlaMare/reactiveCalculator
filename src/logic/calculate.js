import Operate from './operate';

const Calculate = ({ total, next, operation }, buttonName) => {
  const data = { total, next, operation };

  if (buttonName === 'AC') {
    data.total = 0;
    data.next = 0;
    data.operation = false;
  } else if (buttonName === '.') {
    data.next = `${next}.`;
  } else {
    data.total = Operate(1, 2, buttonName);
    data.operation = buttonName;
  }

  return data;
};

export default Calculate;
