import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CoreService {
  subject = new Subject();

  constructor() { }

  addMessage(message: string) {
    this.subject.next(message);
  }

  getMessage() {
    return this.subject.asObservable();
  }

}
