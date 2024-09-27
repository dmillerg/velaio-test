import { Component } from '@angular/core';
import { MENU } from '../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: MENU[] = [
    {
      name: 'tareas',
      url: 'tasks',
      icon: 'bi bi-journal-text'
    },
    {
      name: 'personas',
      url: 'people',
      icon: 'bi bi-person-fill'
    },
    // {
    //   name: 'tareas',
    //   url: 'tasks',
    //   icon: 'bi bi-journal-text'
    // },
  ]

  active: string='tareas'
}
