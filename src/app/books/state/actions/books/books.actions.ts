import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Load Books': emptyProps(),
    'Load Books Success': props<{ books: Book[] }>(),
    'Load Books Failure': props<{ error: unknown }>(),
  }
});

// export const loadBooks = createAction('[Books] load Books');
// export const loadBooksSuccess = createAction('[Books] load Books Success', props<{data: any}>());
// export const loadBooksFailure = createAction('[Books] load Books Failure', props<{error: any}>());
