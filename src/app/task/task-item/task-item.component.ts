import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { taskAnimation } from '../../animations/task.animation';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [taskAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();

  taskState = 'out'
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'avatar1'
  }
  @HostListener('mouseenter')
  onMouseIn() {
    this.taskState = 'in';
  }
  @HostListener('mouseleave')
  onMouseOut() {
    this.taskState = 'out';
  }
  onItemClick() {
    this.taskClick.emit();
  }
  onCheckboxClick(e) {
    e.stopPropagation();
  }
}
