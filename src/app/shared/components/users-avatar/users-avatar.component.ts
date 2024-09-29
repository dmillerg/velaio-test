import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COLOR } from 'src/app/core/constant/color';
import { PEOPLE } from 'src/app/core/models/people.model';

@Component({
  selector: 'app-users-avatar',
  templateUrl: './users-avatar.component.html',
  styleUrls: ['./users-avatar.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class UsersAvatarComponent {

  people: PEOPLE[] = [
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
      color: this.color()
    },
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
      color: this.color()
    },
    {
      full_name: 'DANIEL MILLER GONZALEZ',
      age: 28,
      skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }],
      color: this.color()
    },
  ];

  acronym(people: PEOPLE): string {
    const bypart = people.full_name.split(' ');
    return `${bypart[0][0]}${bypart.length > 1 ? bypart[1][0] : ''}`
  }

  private color() {
    return COLOR[Math.floor(Math.random() * 3) + 1];
  }
}
