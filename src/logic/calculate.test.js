import Calculate from './calculate';
// yarn test src/logic/calculate

describe('Calculate', () => {
  it('all clean', () => {
    expect(
      Calculate({ total: 1, next: 3, operation: 'AC' }, 'AC'),
    ).toEqual({ total: 0, next: 0, operation: false });
  });

  it('sum', () => {
    expect(
      Calculate({ total: 1, next: 3, operation: '+' }, '+'),
    ).toEqual({ total: 4, next: 0, operation: false });
  });

  // it('update from number pad', () => {
  //   expect(
  //     Calculate({ total: 1, next: 3, operation: 9 }, '+'),
  //   ).toEqual({ total: 1, next: 9, operation: '+' });
  // });

  // equal

  // dot
});
