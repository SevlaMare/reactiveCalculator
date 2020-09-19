describe('Calculate', () => {
  it('operate', () => {
    expect(Operate(45,5,'%')).toBe("9")
  });

  it('operate', () => {
    expect(Calculate({ 0, next, operation })).toBe("9")
  });
});