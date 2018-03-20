import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import {DragDropService} from '../drag-drop.service';

@Directive({
  selector: '[appDragDirective][dragTag][dragData][draggedClass]' // 后面跟着它的输入型属性
})
export class DragDirective {
  private _isDraggable = false;
  @Input('appDragDirective') // 作为输入型指令使其可以动态调整值
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rnder.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }
  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  constructor(private el: ElementRef, private rnder: Renderer2, private  dragService: DragDropService) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    if (this.el.nativeElement === event.target) { // 判断拖拽元素
      this.rnder.addClass(this.el.nativeElement, this.draggedClass);
      this.dragService.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rnder.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
