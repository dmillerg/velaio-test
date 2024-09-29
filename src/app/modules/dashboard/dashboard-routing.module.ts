import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ROUTES } from 'src/app/core/constant/routes';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: ROUTES.TASK, loadChildren: () => import('./../task/task.module').then((m) => m.TaskModule) },
      { path: ROUTES.PEOPLE, loadChildren: () => import('./../people/people.module').then((m) => m.PeopleModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
