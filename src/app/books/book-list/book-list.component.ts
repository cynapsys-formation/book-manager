import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book';
import { mergeAll, filter, map, timeout } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];
  books$: Observable<Array<Book>>;
  private subscriptions: Array<Subscription> = [];

  columns = [
    { prop: 'id' },
    { name: 'title' },
    { name: 'description' }
  ];

  constructor(private booksService: BooksService) { }


  ngOnInit() {
  //  this.findAllBooks();
    this.findAllBooksObs();
  }

  remove(id: number) {
    this.booksService.remove(id).subscribe(() => {
       this.findAllBooksObs();
    });
  }

  private findAllBooksObs() {
   this.books$ = this.booksService.findAll();
  }

  private findAllBooks() {

    const subscription = this.booksService.findAll().subscribe((data: any) => {
        this.books = data;
     });
     this.subscriptions.push(subscription);
    /*
    this.booksService.findAll().pipe(
     mergeAll(),
   //  filter((d: any)=> d.title === 'title1'),
    // map((m: any) => Object.assign({}, m, { id: 5}))
     map((m: any) => {
        this.books.push(m);
     })
    ).subscribe((data: any) => {
        console.log('data:',data);
    });
    */
  }

  ngOnDestroy() {
   this.subscriptions.forEach(sub => sub.unsubscribe)
  }

}
