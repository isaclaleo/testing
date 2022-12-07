// Matchers
test('test obj', () => {
  const data = { name: 'isac' };
  data.lastname = 'Renovato';
  expect(data).toEqual({ name: 'isac', lastname: 'Renovato' });
});

test('test obj', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('bulean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('isactes').toMatch(/act/);
});

test('lest / arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  expect(numbers).toContain(6);
});

// examples
test('', () => { });
