const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

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
      mockGetall.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetall).toHaveBeenCalled();
      expect(mockGetall).toHaveBeenCalledTimes(1);
      expect(mockGetall).toHaveBeenCalledWith('books', {});
    });
    test('should get all ', async () => {
      // Arrange
      mockGetall.mockResolvedValue([{
        _id: 1,
        name: 'Harry Potter 2',
      }]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
