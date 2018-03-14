import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() status = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveTask = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onNewTask() {
    this.newTask.emit();
  }
  onMove() {
    this.moveTask.emit();
  }
}
