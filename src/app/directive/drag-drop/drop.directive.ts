import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-droppable]'
})
export class DropDirective {
  @Input() dragEnterClass: string;
  constructor(private el: ElementRef, private rnder: Renderer2) { }

  @HostListener('dragenter', ['$event']) // 拖拽入场
  onDragEnter(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rnder.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event']) // 拖拽悬浮
  onDragOver(event: Event) {
    if (this.el.nativeElement === event.target) {
    }
  }

  @HostListener('dragleave', ['$event']) // 拖拽离开
  onDragLeave(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rnder.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event']) // 放
  onDrop(event: Event) {
    if (this.el.nativeElement === event.target) {
      this.rnder.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
}
