import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private BOOK_API_URL = 'api/books';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BOOK_API_URL);
  }
}
