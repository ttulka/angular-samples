import {Injectable} from '@angular/core';
import {Book} from './book';

const minRate = 1;
const maxRate = 5;

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    return {...book, rating: Math.min(book.rating + 1, maxRate)};
  }

  rateDown(book: Book): Book {
    return {...book, rating: Math.max(book.rating - 1, minRate)};
  }
}
