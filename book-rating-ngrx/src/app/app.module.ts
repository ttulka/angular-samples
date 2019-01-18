import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookComponent} from './book/book.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([BookEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
