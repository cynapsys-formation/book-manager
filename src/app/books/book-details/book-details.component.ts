import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  constructor(private booksService: BooksService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe((params) => {
      const id = +params['id'];
      this.findBookObs(id);
    });
  }

  private findBookObs(id: number) {
    this.book$ = this.booksService.findOne(id);
   }

}
