import { createReducer, on } from '@ngrx/store';
import { BooksActions } from '../../actions/books/books.actions';
import { Book } from 'src/app/models/book';

export const booksFeatureKey = 'books';

export interface BooksState{
  books: Book[];
  selectedBook: Book | null ;
}

export interface State {
  readonly [booksFeatureKey]: BooksState;
}

export const initialState: BooksState = {
  books: [],
  selectedBook: null
};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, {books})=>{
    return {
      ...state,
      books
    }
  })
);

