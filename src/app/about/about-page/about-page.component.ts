import { Component, OnInit } from '@angular/core';
import {CoreService} from '../../core/services/core.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  message = '';
  constructor(private coreService: CoreService) {
    this.coreService.getMessage()
      .subscribe((data: any) => this.message = data);
  }

  ngOnInit() {

  }

  addMessage() {
    this.coreService.addMessage('message from Navbar');
  }

}
