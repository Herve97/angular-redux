import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "../models/user";
import { Book } from "../models/book";

export class Datas implements InMemoryDbService {
  createDb(): Record<string, User[] | Book[]> {
    const users: User[] = [
      {
        id: 1,
        username: 'Diams',
        isAdmin: true,
      },

      {
        id: 2,
        username: 'Hood',
        isAdmin: false,
      },

      {
        id: 3,
        username: 'Remo',
        isAdmin: false,
      },

      {
        id: 5,
        username: 'The Best',
        isAdmin: false,
      },
    ];

    const books: Book[] = [
      {
        id: 0,
        author: 'Mammer',
        name: 'Learn Ngrx',
        publisher: 'Coulisses Learn',
      },
    ];

    return { users, books };
  }
}
