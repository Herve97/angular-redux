import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';
import { Book } from '../models/book';
import { Store } from '@ngrx/store';
import { BooksActions } from './state/actions/books/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books$!: Observable<Book[]>

  constructor(private booksService: BooksService, private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooks())
  }

}
