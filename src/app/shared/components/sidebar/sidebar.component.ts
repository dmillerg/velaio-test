import { Component, inject, OnDestroy } from '@angular/core';
import { MENU } from '../../../modules/dashboard/models/menu.model';
import { ROUTES } from 'src/app/core/constant/routes';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterLink],
  standalone: true
})
export class SidebarComponent implements OnDestroy{
  menu: MENU[] = [
    {
      name: 'tareas',
      url: ROUTES.TASK,
      icon: 'bi bi-ui-checks'
    },
    {
      name: 'personas',
      url: ROUTES.PEOPLE,
      icon: 'bi bi-people-fill'
    },
  ]

  active: string = 'tareas';

  routerSub$ = new Subscription();
  router = inject(Router);

  constructor() {
    this.changeRoute();
  }

  ngOnDestroy(): void {
    this.routerSub$.unsubscribe()
  }

  changeRoute() {
    this.active = this.router.url.substring(1)
    this.routerSub$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active = this.router.url.substring(1)
      }
    });
  }
}
