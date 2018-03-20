import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { cardAnimation } from '../../animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }
  ngOnInit() {
  }
  @HostListener('mouseenter')   // html渲染完成后会产生一个数组里面含有鼠标事件，使用hostlistener监听事件
  onMouseEnter() {
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
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
