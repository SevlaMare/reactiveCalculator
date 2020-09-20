import Calculate from './calculate';
// yarn test src/logic/calculate

describe('Calculate', () => {
  it('all clean', () => {
    expect(
      Calculate({ total: 1, next: 3, operation: 'AC' }, 'AC'),
    ).toEqual({ total: 0, next: '', operation: '' });
  });

  it('invert direction for total', () => {
    expect(
      Calculate({ total: 1, next: "", operation: 0 }, '+/-'),
    ).toEqual({ total: -1, next: "", operation: 0 });
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

  // equal

  // dot
});
