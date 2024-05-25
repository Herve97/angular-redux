import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// La route path a été crée avec le lazy loading de son module

const routes: Route[] = [
  {
    path: 'books',
    loadChildren: ()=> import('./books/books.module').then((m)=> m.BooksModule)
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
