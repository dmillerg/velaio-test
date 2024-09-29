import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-people-filter',
  templateUrl: './people-filter.component.html',
  styleUrls: ['./people-filter.component.scss']
})
export class PeopleFilterComponent {
  filter: string = '';
  @Output() filterData = new EventEmitter<string>();

  changeFilter() {
    this.filterData.emit(this.filter);
  }
}
