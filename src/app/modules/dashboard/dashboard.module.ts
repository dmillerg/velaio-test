import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TaskModule } from '../task/task.module';
import { PeopleModule } from '../people/people.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    DashboardRoutingModule,
    TaskModule,
    PeopleModule,
  ]
})
export class DashboardModule { }
