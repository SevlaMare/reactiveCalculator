import Operate from './operate';

const Calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  if (buttonName == '0 ')

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
