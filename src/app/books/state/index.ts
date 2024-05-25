import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { reducer } from './reducers/book/book.reducer';

export const bookFeatureKey = 'books';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  books: reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
