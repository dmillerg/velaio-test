import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleContainerComponent } from './components/people-container/people-container.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemListComponent } from './components/people-item-list/people-item-list.component';
import { PeopleFilterComponent } from './components/people-filter/people-filter.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardContainerComponent } from 'src/app/shared/components/card-container/card-container.component';
import { PeoplePreviewComponent } from './components/people-preview/people-preview.component';
import { filter } from 'src/app/core/pipe/filter.pipe';


@NgModule({
  declarations: [
    PeopleContainerComponent,
    PeopleListComponent,
    PeopleItemListComponent,
    PeopleFilterComponent,
    PeopleFormComponent,
    PeoplePreviewComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule,
    CardContainerComponent,
    filter,
    FormsModule,
  ],
  exports: [PeopleFormComponent, PeoplePreviewComponent],
  providers: [filter]
})
export class PeopleModule { }
