import {Component, OnInit} from '@angular/core';
import {LoadBooks} from './actions/book.actions';
import {Store} from '@ngrx/store';
import {State} from './reducers';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book Rating';

  constructor(private stateStore: Store<State>) {
  }

  ngOnInit(): void {
    // request data only once (dashboard will use the loaded data)
    // if this is in the dashboard component, the request is done every time the dashboard is rendered
    this.stateStore.dispatch(new LoadBooks());
  }
}
