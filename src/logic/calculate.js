import Operate from './operate';

const Calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  if (buttonName === 'AC') return { total: 0, next: 0, operation: false };

  // else if (buttonName === '.') {
  //   data.next = `${next}.`;
  // } else {
  //   data.total = Operate(1, 2, buttonName);
  //   data.operation = buttonName;
  // }

  return data;
};

export default Calculate;
