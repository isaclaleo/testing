describe('set 1', () => {
  beforeAll(() => {
    console.log('Beforceall set 1');
  });
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 - 1).toBe(0);
  });
  test('case 3', () => {
    expect(10 / 10).toBe(1);
  });
  beforeEach(() => {
    console.log('beforeEach set');
  });
  describe('set 2', () => {
    beforeAll(() => {
      console.log('beforceall set 2');
    });
    test('case 4', () => {
      expect(10 * 10).toBe(100);
    });
    test('case 5', () => {
      expect(4 * 10).toBe(40);
    });
    test('case 6', () => {
      expect(10 * 5).toBe(50);
    });
    afterAll(() => {
      console.log('afterall set2');
    });
    afterEach(() => {
      console.log('aftereach set 2');
    });
  });
});
