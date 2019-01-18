import {Action} from '@ngrx/store';
import {Book} from '../shared/book';
import {HttpErrorResponse} from '@angular/common/http';

export enum BookActionTypes {
  LoadBooks = 'LOAD_BOOKS',
  LoadBooksSuccess = 'LOAD_BOOKS_SUCCESS',
  LoadBooksFail = 'LOAD_BOOKS_FAIL'
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;

  constructor(public payload: Book[]) {
  }
}

export class LoadBooksFail implements Action {
  readonly type = BookActionTypes.LoadBooksFail;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFail;
