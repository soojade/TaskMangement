import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  constructor() { }
  ngOnInit() {
  }

  onInvite() {
    this.invite.emit(); // 不涉及逻辑处理,由父组件处理
  }
  onEditClick() {
    this.onEdit.emit();
  }
  onDelete() {
    this.onDel.emit();
  }
}
