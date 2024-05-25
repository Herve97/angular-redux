import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer, metaReducers, ROOT_FEATURE_KEY } from './state/00-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/04-effects';
import { Datas } from './api/datas';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BooksModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        [ROOT_FEATURE_KEY]: rootReducer,
      },
      {
        metaReducers,
        runtimeChecks: {
          strictActionTypeUniqueness: true,
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Starter',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(Datas),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
