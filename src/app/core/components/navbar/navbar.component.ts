import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Link } from '../../models/link';
import {CoreService} from '../../services/core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string;
  @Input() links: Array<Link>;
  @Output() linkEvent = new EventEmitter();
  message = '';

  constructor(private coreService: CoreService) {
    console.log('constructor', this.title);

   }

  ngOnInit() {
    console.log('ngOnInit', this.title);

    this.coreService.getMessage()
      .subscribe((data: any) => this.message = data);

  }



  ngOnChanges(changes: SimpleChanges) {
   console.log('ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


  onHover() {
    this.hoverImpl();
  }

  private hoverImpl() {
    console.log('navbar');
    this.linkEvent.emit({ message: 'link was hovered'});
  }

}
