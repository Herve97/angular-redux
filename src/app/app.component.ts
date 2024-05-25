import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootActions, loadUsers } from './state/01-actions';
// import * as RootActions from './state/01-actions';
import { Observable } from 'rxjs';
import { State } from './state/00-reducer';
import { User } from './models/user';
import { getError, getIsLoaded, getUser, getUsers } from './state/02-selectors';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-redux';

  public user: Observable<User> = {} as Observable<User>;
  public users$!: Observable<User[]>;
  public isLoaded$!: Observable<boolean | undefined>;
  public error$!: Observable<HttpErrorResponse | Error | string | null | undefined>;

  constructor(private store: Store<State>, private http: HttpClient) {}

  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp());
    // this.store.dispatch(RootActions.initAction());
    // this.user = this.store.select((state: any)=> state.root.user)
    // this.store.select((state: any)=>  {return state.root.user})
    // .subscribe((response)=>{
    //   console.log('Selecteur: ', response);
    //   this.user = response;
    //   console.log('The user in select: ', this.user);
    //   return this.user;
    // })

    // this.user = this.store.pipe(select((state: any) => state.root.user));
    // this.user = this.store.pipe(select((state: State) => state['root']['user']));
    // this.user = this.store.pipe(select((state: State) => state.root.user));
    this.user = this.store.pipe(select(getUser));
    console.log('The user: ', this.user);
    // this.http.get('api/users').subscribe((val)=> console.log(val))
    this.users$ = this.store.pipe(select(getUsers));
    this.isLoaded$ = this.store.pipe(select(getIsLoaded));
    this.error$ = this.store.pipe(select(getError));
  }

  public changeUsername(): void {
    this.store.dispatch(
      RootActions.changeUsername({
        username: `Coulisses ${Math.floor(Math.random() * 1000)}`,
      })
    );
    this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false }));
  }

  public loadUsers(): void {
    this.store.dispatch(loadUsers());
  }
}
