import Calculate from './calculate';

describe('Calculate', () => {
  it('operate', () => {
    expect(
      Calculate({total: 1, next: 3, operation: 'AC'}, 'AC')
    ).toEqual({"next": 0, "operation": false, "total": 0})
  });

  // it('operate', () => {
  //   expect(
  //     Calculate({total: 1, next: 3, operation: '+'}, '+')
  //   ).toBe("9")
  // });
});