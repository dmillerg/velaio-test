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
      icon: 'bi bi-ui-checks'
    },
    {
      name: 'personas',
      url: 'people',
      icon: 'bi bi-people-fill'
    },
  ]

  active: string='tareas'
}
