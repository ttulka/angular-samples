import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {
    console.log('constructor', this);
  }

  ngOnInit() {
    console.log('ngOnInit', this);
    this.books = [{
      isbn: '001',
      title: 'Elegant Objects',
      description: 'OOP',
      rating: 1
    }, {
      isbn: '002',
      title: 'Clean Architecture',
      description: 'Design',
      rating: 2
    }, {
      isbn: '003',
      title: 'Clean Code',
      description: 'Programming',
      rating: 3
    }, {
      isbn: '004',
      title: 'Domain-Driven Development',
      description: 'Programming',
      rating: 4
    }]
      .sort((b1, b2) => b2.rating - b1.rating);
  }

  updateAndSort(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((b1, b2) => b2.rating - b1.rating);
  }

}
