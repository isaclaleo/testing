const BooksService = require('./books.service');

describe('test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });
  describe('test for the getBooks', () => {
    test('should get all books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
  });
});
