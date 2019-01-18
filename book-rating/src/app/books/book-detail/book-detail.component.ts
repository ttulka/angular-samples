import {Component, OnInit} from '@angular/core';
import {BookStoreService} from '../shared/book-store.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../shared/book';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'br-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private bookStore: BookStoreService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        switchMap(isbn => this.bookStore.findBook(isbn) // flat the observable for deterministic behavior
          .pipe(
            catchError(err => of({  // deliver a fake book in case of a service error
              isbn: '???',
              title: 'Error',
              description: err.message,
              rating: 0
            }))
          )
        ),
        share()
      );
  }
}
