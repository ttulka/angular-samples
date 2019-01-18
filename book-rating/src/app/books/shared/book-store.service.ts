import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Book} from './book';

const API = 'https://api.angular.schule';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) {
  }

  listBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API + '/books');
  }

  findBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(API + '/books/' + isbn);
  }
}
