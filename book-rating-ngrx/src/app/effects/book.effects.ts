import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BookStoreService} from '../shared/book-store.service';
import {Observable} from 'rxjs';
import {BookActions, BookActionTypes, LoadBooksSuccess} from '../actions/book.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class BookEffects {

  // do the side-effect operation (loading from http) and fire a message (LoadBooksSuccess action)
  @Effect()
  loadBooks$: Observable<BookActions> = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.service.getAll()),
    map(books => new LoadBooksSuccess(books)),
    // TODO catchError(err => new LoadBooksFail(err))
  );

  constructor(private service: BookStoreService, private actions$: Actions) {
  }
}
