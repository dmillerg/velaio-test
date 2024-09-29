import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PEOPLE } from 'src/app/core/constant/models/people.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  people: PEOPLE[] = [
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
    },
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
    },
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
    },
  ];

  acronym(people: PEOPLE): string {
    const bypart = people.full_name.split(' ');
    return `${bypart[0][0]}${bypart.length > 1 ? bypart[1][0] : ''}`
  }
}
