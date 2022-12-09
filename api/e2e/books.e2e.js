const request = require('supertest');

const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakesBooks/books.fakes');

const mockGetall = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetall,
  create: () => {},
})));

describe('Test first Get Hello enpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3501);
  });
  afterAll(async () => {
    await server.close();
  });
  describe('Pruebas (get) /api/v1/books', () => {
    test('should return a list books', () => {
      // Arrange
      const fake = generateManyBooks(30);
      mockGetall.mockResolvedValue(fake);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log('body', body);
          // Assert
          expect(body.length).toEqual(1);
        });
    });
  });
});
