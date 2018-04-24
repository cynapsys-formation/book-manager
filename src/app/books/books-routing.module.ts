import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', 
    component: BooksPageComponent, 
    children: [
      { path: '', component: BookListComponent },
      { path: 'new', component: BookFormComponent },
      { path: 'details/:id', component: BookDetailsComponent },
      { path: 'edit/:id', component: BookFormComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
