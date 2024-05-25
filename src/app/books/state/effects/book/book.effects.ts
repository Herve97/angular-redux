import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from 'src/app/books/services/books.service';
import { BooksActions } from '../../actions/books/books.actions';
import { Book } from 'src/app/models/book';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      // tap((val) => console.log('actions: ', val)),
      ofType(BooksActions.loadBooks),
      mergeMap(() =>
        this.booksService
          .getBooks()
          .pipe(
            map((books: Book[]) => BooksActions.loadBooksSuccess({ books }))
          )
      ),
      catchError((error) =>
        of(BooksActions.loadBooksFailure({ error: error.body.error }))
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
