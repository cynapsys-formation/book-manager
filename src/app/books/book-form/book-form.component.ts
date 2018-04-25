import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../book';
import {BooksService} from '../books.service';
import {ActivatedRoute} from '@angular/router';
import {debounce, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookModel: Book;
  bookModelControl: any;
  formBook: FormGroup;
  message: string;

  id: number;
  constructor(private booksService: BooksService,
              private formBuilder: FormBuilder,
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

    this.bookModelControl = {
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required])
    };
    this.formBook = this.formBuilder.group(this.bookModelControl);


    this.bookModelControl.title.valueChange
      .subscribe((value) => {
      console.log(value);
    });
  }

  onSave() {
    console.log('f', this.formBook.value);

    /*
    let bookM: Book = new Book();
    bookM = Object.assign({}, this.bookModel);
    if (this.id && this.bookModel.id) {
      this.booksService.edit(this.id, bookM).subscribe();
    } else {
      this.booksService.add(bookM).subscribe();
    }
    */
  }
}
