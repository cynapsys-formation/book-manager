import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  apiUrl = 'http://localhost:3000';
  private books: Array<Book> = [];

  constructor(private http: HttpClient) { 
   // this.books.push({ title: 'title1', description: 'description1'})
   // this.books.push({ title: 'title2', description: 'description2'})
  
  }

  findAll(): Observable<any> {
    // return Observable.of(this.books);
    return this.http.get(`${this.apiUrl}/books`);
  }

  findOne(id: number): Observable<any> {
    // return Observable.of(this.books);
    return this.http.get(`${this.apiUrl}/books/${id}`);
  }



}
