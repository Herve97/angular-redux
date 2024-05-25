/**
 * Notre premier reducer
 */
import {
  Action,
  ActionReducer,
  createReducer,
  MetaReducer,
  on,
} from '@ngrx/store';
import { loadUsers, loadUsersFail, loadUsersSuccess } from './01-actions';
import { RootActions } from './01-actions';
import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';

export const ROOT_FEATURE_KEY = 'root';

export interface State {
  readonly [ROOT_FEATURE_KEY]: RootState;
}

export interface RootState {
  appName: string;
  user: User;
  users: User[];
  loaded?: boolean;
  error?: HttpErrorResponse | Error | string | null;
}

const initialState: RootState = {
  appName: 'NgRx',
  user: {
    username: '',
    isAdmin: false,
  },
  users: [],
  error: null,
};

function log(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentState = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('Etat précédent: ', state);
    console.log('Etat suivant: ', currentState);
    console.log('Action: ', action);
    console.groupEnd();
    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<RootState, Action>(
  initialState,
  on(RootActions.initApp, (state: RootState) => {
    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true,
      },
    };
  }),
  on(RootActions.changeUsername, (state: RootState, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username,
        isAdmin: true,
      },
    };
  }),
  on(loadUsers, (state: RootState) => {
    return { ...state, loaded: false };
  }),
  on(loadUsersSuccess, (state: RootState, props) => {
    return { ...state, users: props.users, loaded: true };
  }),
  on(loadUsersFail, (state: RootState, props) => {
    return {
      ...state,
      users: [],
      loaded: true,
      error: props.error
    };
  })
);
