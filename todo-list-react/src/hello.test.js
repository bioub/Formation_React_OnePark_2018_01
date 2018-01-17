const sum = (a, b) => a + b;

const doSomething = (cb) => {
  // TODO something
  cb('Hello');
};

it('should return correct result', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

it('should call param cb', () => {
  const mock = jest.fn();
  doSomething(mock);

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('Hello');
});
