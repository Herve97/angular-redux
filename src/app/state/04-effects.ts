import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects'

import * as UsersActions from './01-actions';
import { tap, mergeMap, map, catchError, of } from 'rxjs';
import { UsersService } from '../services/users/users.service';
import { User } from '../models/user';

@Injectable()
export class AppEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      tap((val) => console.log('actions: ', val)),
      ofType(UsersActions.loadUsers),
      mergeMap((action) =>
        this.userService
          .getUsers()
          .pipe(
            map((users: User[]) => UsersActions.loadUsersSuccess({ users }))
          )
      ),
      catchError((error) => of(UsersActions.loadUsersFail({error: error.body.error})))
    )
  );

  constructor(private actions$: Actions, private userService: UsersService) {}
}
