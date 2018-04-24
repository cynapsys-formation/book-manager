import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksService } from './books.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  declarations: [BooksPageComponent, BookListComponent, BookFormComponent, BookDetailsComponent]
})
export class BooksModule { }
