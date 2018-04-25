import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpperCasePipe} from './pipes/upper-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpperCasePipe],
  exports: [UpperCasePipe]
})
export class SharedModule { }
