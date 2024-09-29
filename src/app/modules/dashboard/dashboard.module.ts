import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TaskModule } from '../task/task.module';
import { PeopleModule } from '../people/people.module';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    DashboardRoutingModule,
    TaskModule,
    PeopleModule,
    SidebarComponent
  ],
})
export class DashboardModule { }
