import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleContainerComponent } from './components/people-container/people-container.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemListComponent } from './components/people-item-list/people-item-list.component';
import { PeopleFilterComponent } from './components/people-filter/people-filter.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeopleContainerComponent,
    PeopleListComponent,
    PeopleItemListComponent,
    PeopleFilterComponent,
    PeopleFormComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule
  ],
  exports: [PeopleFormComponent]
})
export class PeopleModule { }
