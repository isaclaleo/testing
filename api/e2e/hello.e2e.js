const request = require('supertest');

const createApp = require('../src/app');

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
  describe('Pruebas (get)', () => {
    test('should return "Hello World"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
