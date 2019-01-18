import {Book} from '../shared/book';
import {BookActions, BookActionTypes} from '../actions/book.actions';

export interface State {

  books: Book[];
  loading: boolean;
  error: Error;
}

export const initialState: State = {

  books: [],
  loading: false,
  error: null
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      return {...state, loading: true};

    case BookActionTypes.LoadBooksSuccess:
      return {...state, loading: false, books: action.payload};

    case BookActionTypes.LoadBooksFail:
      return {...state, loading: false, books: [], error: action.payload};

    default:
      return state;
  }
}
