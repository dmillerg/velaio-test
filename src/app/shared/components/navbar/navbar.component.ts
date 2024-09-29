import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PEOPLE } from 'src/app/core/models/people.model';
import { UsersAvatarComponent } from '../users-avatar/users-avatar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, UsersAvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 

  acronym(people: PEOPLE): string {
    const bypart = people.full_name.split(' ');
    return `${bypart[0][0]}${bypart.length > 1 ? bypart[1][0] : ''}`
  }
}
