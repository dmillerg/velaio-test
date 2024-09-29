import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PEOPLE } from 'src/app/core/models/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnChanges{
  @Input() people: PEOPLE[] = [];
  @Input() filterData: string='';
  filter: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    this.filter = this.filterData;
  }
}
