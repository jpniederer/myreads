import * as BooksAPI from '../BooksAPI';

describe('BooksAPI', () => {
  const books = BooksAPI.getAll();

  it('gets books', () => {
    expect(books.length).toBeGreaterThan(0);
  })
})