const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for the books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3502);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });
  afterAll(async () => {
    await server.close();
    await database.collection('books').drop();
  });
  describe('Pruebas (get) /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'BLALALS',
          year: 1998,
          author: 'isac',
        },
        {
          name: 'LALALALa',
          year: 1998,
          author: 'isac',
        },
      ]);
      console.log('seeddat', seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log('body', body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
