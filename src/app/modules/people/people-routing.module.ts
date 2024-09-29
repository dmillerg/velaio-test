import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleContainerComponent } from './components/people-container/people-container.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes: Routes = [
  {
    path: '', component: PeopleContainerComponent, children: [
      { path: '', component: PeopleListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
