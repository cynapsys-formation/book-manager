import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Book} from '../book';
import {BooksService} from '../books.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookModel: Book;
  id: number;
  constructor(private booksService: BooksService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formInit();
    this.activeRoute.params.subscribe((params) => {
      this.id = +params['id'];
      if (this.id) {

       // setTimeout(() => {
          this.findBookObs(this.id);
       // }, 5000);
      }
    });
  }

  private findBookObs(id: number) {
    this.booksService.findOne(id).subscribe(data => this.bookModel = data);
  }

  private formInit() {
    this.bookModel = new Book();
    this.bookModel.title = '';
    this.bookModel.description = '';
  }

  onSave() {
    let bookM: Book = new Book();
    bookM = Object.assign({}, this.bookModel);
    if (this.id && this.bookModel.id) {
      this.booksService.edit(this.id, bookM).subscribe();
    } else {
      this.booksService.add(bookM).subscribe();
    }
  }
}
