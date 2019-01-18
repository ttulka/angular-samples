import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [{
  path: 'dashboard', component: DashboardComponent
}, {
  path: 'book/:isbn', component: BookDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
