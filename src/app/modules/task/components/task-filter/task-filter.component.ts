import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {
  filter?: boolean = undefined;
  @Output() filterData = new EventEmitter<boolean>();

  changeFilter(data?: boolean) {
    this.filter = data;
    this.filterData.emit(data);
  }
}
