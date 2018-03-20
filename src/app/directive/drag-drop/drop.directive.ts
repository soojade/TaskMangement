import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';

@Directive({
  selector: '[appDropDirective][dropTags][dragEnterClass]'
})
export class DropDirective {
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = []; // 可拖放的区域
  @Output() dropped = new EventEmitter<DragData>();
  private data$;
  constructor(private el: ElementRef, private rnder: Renderer2, private dragService: DragDropService) {
    this.data$ = this.dragService.getDragData().take(1);
  }

  @HostListener('dragenter', ['$event']) // 拖拽入场
  onDragEnter(event: Event) {
    // 多级拖拽防止冒泡
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rnder.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('dragover', ['$event']) // 拖拽悬浮
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) { // 是否允许特效
          this.rnder.setProperty(event, 'dataTransfer.effectAllowed', 'all');
          this.rnder.setProperty(event, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rnder.setProperty(event, 'dataTransfer.effectAllowed', 'none');
          this.rnder.setProperty(event, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event']) // 拖拽离开
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rnder.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event']) // 放
  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.el.nativeElement === event.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rnder.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.dragService.clearDragData();
        }
      });
    }
  }
}
