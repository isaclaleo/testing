const { generateManyBooks } = require('../fakesBooks/books.fakes');
const BooksService = require('./books.service');

const mockGetall = jest.fn();

// const MongoLibStub = {
//   getAll: mockGetall,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetall,
  create: () => {},
})));

describe('test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('test for the getBooks', () => {
    test('should get all books', async () => {
      // Arrange
      const fake = generateManyBooks(30);
      mockGetall.mockResolvedValue(fake);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fake.length);
      expect(mockGetall).toHaveBeenCalled();
      expect(mockGetall).toHaveBeenCalledTimes(1);
      expect(mockGetall).toHaveBeenCalledWith('books', {});
    });
    test('should get all ', async () => {
      // Arrange
      const fakess = generateManyBooks(3);
      mockGetall.mockResolvedValue(fakess);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakess[0].name);
    });
  });
});
