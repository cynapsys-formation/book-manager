import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './core/models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'BookStore';
  appLinks: Array<Link> = [
    { path: '/', title: 'Home'},
    { path: '/about', title: 'About'},
    { path: '/books', title: 'Books'}
  ];
  message: string;

  constructor(private router: Router){

  }

  onLinkEvent(data) {
    console.log('onLinkEvent from appCop', data);
    if (data.message) {
      this.message = data.message;
    }
  }


  goToAbout() {
    this.router.navigate(['about']);
  }
}
