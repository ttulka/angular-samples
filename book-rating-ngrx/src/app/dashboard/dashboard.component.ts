import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';
import {select, Store} from '@ngrx/store';
import {State} from '../reducers';
import {getAllBooks, getBooksLoading} from '../selectors/book.selector';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush // use redux
})
export class DashboardComponent implements OnInit {

  loading$: Observable<boolean> = of(false);
  books$: Observable<Book[]> = of([]);

  constructor(private service: BookStoreService, private stateStore: Store<State>) {
  }

  ngOnInit() {
    this.loading$ = this.stateStore.pipe(select(getBooksLoading));
    this.books$ = this.stateStore.pipe(select(getAllBooks));
  }

  doRateUp(book: Book) {
    const rating = Math.min(5, book.rating + 1);
    this.service.setRating(book.isbn, rating)
      .subscribe(e => console.log(e));
  }

  doRateDown(book: Book) {
    const rating = Math.max(1, book.rating - 1);
    this.service.setRating(book.isbn, rating)
      .subscribe(e => console.log(e));
  }
}
