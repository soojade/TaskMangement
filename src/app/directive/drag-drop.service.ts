import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface DragData {
  tag: string; // 作为拖拽元素的标志,唯一的
  data: any; // 传递的数据
}
@Injectable()
export class DragDropService {
  private _dragData = new BehaviorSubject<DragData>(null); // 总能记住上次的值
  setDragData(data: DragData) { // 设置数据
    this._dragData.next(data);
  }
  getDragData(): Observable<DragData> { // 获取数据
    return this._dragData.asObservable();
  }
  clearDragData() { // 清空数据
    this._dragData.next(null);
  }
}
