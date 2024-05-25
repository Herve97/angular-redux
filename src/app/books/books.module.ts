import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/reducers/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effects/book/book.effects';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, FormComponent, BooksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent,
      },
    ]),
  ],
  exports: [ReactiveFormsModule],
})
export class BooksModule {}
