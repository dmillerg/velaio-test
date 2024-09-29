import { Component } from '@angular/core';
import { PEOPLE } from 'src/app/core/models/people.model';

@Component({
  selector: 'app-people-container',
  templateUrl: './people-container.component.html',
  styleUrls: ['./people-container.component.scss']
})
export class PeopleContainerComponent {

  people: PEOPLE[] = [
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
    },
    {
      full_name: 'Juan MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
    },
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
    },
  ];

  filterData: string = '';

  changeFiter(filter: string) {
    this.filterData = filter
  }
}
