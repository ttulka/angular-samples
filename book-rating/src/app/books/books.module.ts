import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {BooksRoutingModule} from './books-routing.module';
import {BookComponent} from './book/book.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RepeatDirective} from '../general/repeat.directive';
import {CreateBookComponent} from './create-book/create-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    RepeatDirective,
    CreateBookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule {
}
