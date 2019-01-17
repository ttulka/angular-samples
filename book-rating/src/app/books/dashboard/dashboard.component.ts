import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookStore: BookStoreService) {
    Object.defineProperty(Array.prototype, 'sortByRating', {
      value: function () {
        return this.sort((b1, b2) => b2.rating - b1.rating);
      }
    });
  }

  ngOnInit() {
    this.bookStore.getAll()
      .subscribe(books => this.books = this.sortByRating(books));
  }

  updateAndSort(book: Book) {
    this.books = this.sortByRating(this.books
      .map(b => b.isbn === book.isbn ? book : b));
  }

  createAndSort(book: Book) {
    this.books = this.sortByRating([...this.books, book]);
  }

  private sortByRating(books: Book[]): Book[] {
    return books.sort((b1, b2) => b2.rating - b1.rating);
  }
}
