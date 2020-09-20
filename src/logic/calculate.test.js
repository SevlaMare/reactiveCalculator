import Calculate from './calculate';
// yarn test src/logic/calculate

describe('Calculate, basic operations', () => {
  it('sum', () => {
    expect(
      Calculate({ total: 3, next: 2, operation: '+' }, '+'),
    ).toEqual({ total: 5, next: 0, operation: false });
  });

  it('sub', () => {
    expect(
      Calculate({ total: 3, next: 2, operation: '-' }, '-'),
    ).toEqual({ total: 1, next: 0, operation: false });
  });

  it('multiply', () => {
    expect(
      Calculate({ total: 3, next: 2, operation: 'X' }, 'X'),
    ).toEqual({ total: 6, next: 0, operation: false });
  });

  it('division', () => {
    expect(
      Calculate({ total: 15, next: 5, operation: '÷' }, '÷'),
    ).toEqual({ total: 3, next: 0, operation: false });
  });

  it('division by zero, should not alter data', () => {
    expect(
      Calculate({ total: 15, next: 0, operation: '÷' }, '÷'),
    ).toEqual({ total: 15, next: 0, operation: '÷' });
  });
});

describe('Calculate', () => {
  it('all clean', () => {
    expect(
      Calculate({ total: 1, next: 3, operation: 'AC' }, 'AC'),
    ).toEqual({ total: 0, next: '', operation: '' });
  });

  it('invert direction for total', () => {
    expect(
      Calculate({ total: 1, next: '', operation: 0 }, '+/-'),
    ).toEqual({ total: -1, next: '', operation: 0 });
  });

  it('invert direction for next', () => {
    expect(
      Calculate({ total: 7, next: 3, operation: 0 }, '+/-'),
    ).toEqual({ total: 7, next: -3, operation: 0 });
  });

  it('equal =', () => {
    expect(
      Calculate({ total: 3, next: 2, operation: '+' }, '='),
    ).toEqual({ total: 5, next: '', operation: '' });
  });

  it('dot for empty next', () => {
    expect(
      Calculate({ total: 3, next: '', operation: '.' }, '.'),
    ).toEqual({ total: 3, next: '0.', operation: false });
  });

  it('dot for not empty next', () => {
    expect(
      Calculate({ total: 3, next: 5, operation: '.' }, '.'),
    ).toEqual({ total: 3, next: '5.', operation: false });
  });
});
