const Person = require('./06-person');

describe('Test of Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Isac', 45, 1.8);
  });
  test('should  return  donw', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('shouldshould be normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
