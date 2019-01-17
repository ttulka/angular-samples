import {BookRatingService} from './book-rating.service';
import {Book} from './book';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Angular Buch',
      description: 'Programming',
      rating: 3
    };
  });

  it('should return a new instance', () => {
    const ratedBook = service.rateUp(book);
    expect(book).not.toBe(ratedBook);
  });

  it('should not rate up the original object', () => {
    service.rateUp(book);
    expect(book.rating).toBe(3);
  });

  it('should rated up by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should not be allowed more than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should return a new instance', () => {
    const ratedBook = service.rateDown(book);
    expect(book).not.toBe(ratedBook);
  });

  it('should not rate down the original object', () => {
    service.rateDown(book);
    expect(book.rating).toBe(3);
  });

  it('should rated down by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed less than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
