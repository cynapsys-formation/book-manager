import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private apiUrl = 'api';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  findOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/${id}`);
  }

  remove(id: number) {
    return this.http.delete(`${this.apiUrl}/books/${id}`);
  }

  add(model: Book): Observable<Book> {
    return this.http.post(`${this.apiUrl}/books`, model) as Observable<Book>;
  }

  edit(id: number, model: Book) {
    return this.http.put(`${this.apiUrl}/books/${id}`, model);
  }
}
