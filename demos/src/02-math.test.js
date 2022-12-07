const {
  sum, multiply, divide, rest,
} = require('./02-math');

test('adds 2 + 2 to equal 4', () => {
  const rep = sum(2, 2);
  expect(rep).toBe(4);
});
test('shuold equal 4', () => {
  const rep = multiply(2, 2);
  expect(rep).toBe(4);
});
test('should equal 1', () => {
  const rep = divide(2, 2);
  expect(rep).toBe(1);
  const rep2 = divide(10, 5);
  expect(rep2).toBe(2);
  const rep3 = divide(10, 10);
  expect(rep3).toBe(1);
});
test('should equal 0', () => {
  const rep = rest(2, 2);
  expect(rep).toBe(0);
});
