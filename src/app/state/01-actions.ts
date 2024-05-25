import { createAction, props, createActionGroup, emptyProps } from "@ngrx/store";
import { User } from "../models/user";
import { HttpErrorResponse } from "@angular/common/http";

// export const initAction = createAction('[ROOT] Init app');

// export const changeUsername = createAction('[ROOT] Change username', props<{username: string}>());
// export const changeIsAdmin = createAction('[ROOT] Change isAdmin', props<{isAdmin: boolean}>());

export const RootActions = createActionGroup({
  source: 'ROOT',
  events: {
    'Init app': emptyProps(),
    'Change username': props<{ username: string }>(),
    'Change isAdmin': props<{ isAdmin: boolean }>(),
  },
});

export const loadUsers = createAction('[USERS API] load users');
export const loadUsersSuccess = createAction('[USERS API] load users success', props<{users: User[]}>());
export const loadUsersFail = createAction('[USERS API] load users fail', props<{error: HttpErrorResponse | Error | string }>());
