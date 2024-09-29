import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PEOPLE } from 'src/app/core/models/people.model';
import { UsersAvatarComponent } from '../users-avatar/users-avatar.component';
import { Store } from '@ngrx/store';
import { addSidebarView } from '../../state/actions/sidebar-view.action';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTES } from 'src/app/core/constant/routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, UsersAvatarComponent, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy{

  title: 'All tasks' | 'All people' = 'All tasks';
  routerSub$ = new Subscription();
  router = inject(Router);
 
  constructor(private store: Store){
    this.changeRoute();
  }

  ngOnDestroy(): void {
    this.routerSub$.unsubscribe()
  }

  changeRoute() {
    this.title = this.router.url.substring(1)===ROUTES.TASK?'All tasks':'All people'
    this.routerSub$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.title = this.router.url.substring(1)===ROUTES.TASK?'All tasks':'All people'
      }
    });
  }

  acronym(people: PEOPLE): string {
    const bypart = people.full_name.split(' ');
    return `${bypart[0][0]}${bypart.length > 1 ? bypart[1][0] : ''}`
  }

  addTask() {
    this.store.dispatch(addSidebarView({ sidebarView: { type: 'new task' } }))
  }

  
}
