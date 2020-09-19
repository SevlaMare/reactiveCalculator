import Operate from './operate';

describe('Operate', () => {
  it('sum', () => {
    expect(Operate(1,2,'+')).toBe("3")
  });

  it('subtract', () => {
    expect(Operate(1,2,'-')).toBe("-1")
  });

  it('multiply', () => {
    expect(Operate(3,2,'X')).toBe("6")
  });

  it('div', () => {
    expect(Operate(45,5,'÷')).toBe("9")
  });

  it('div by zero', () => {
    expect(Operate(45,0,'÷')).toBe("Can't divide by zero")
  });

  it('Decimal percentage', () => {
    expect(Operate(100,5,'%')).toBe("0.2")
  });

  it('Change direction', () => {
    expect(Operate(5, 0,'+/-')).toBe("-5")
  });
});