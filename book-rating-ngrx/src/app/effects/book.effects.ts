import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BookStoreService} from '../shared/book-store.service';
import {Observable} from 'rxjs';
import {BookActionTypes, LoadBooksSuccess} from '../actions/book.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$: Observable<LoadBooksSuccess> = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.service.getAll()),
    map(books => new LoadBooksSuccess(books))
  );

  constructor(private service: BookStoreService, private actions$: Actions) {

  }
}
