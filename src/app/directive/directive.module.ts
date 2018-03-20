import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag_drop/drag.directive';
import { DropDirective } from './drag_drop/drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DragDirective, DropDirective]
})
export class DirectiveModule { }
