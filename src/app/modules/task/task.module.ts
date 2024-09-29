import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskContainerComponent } from './components/task-container/task-container.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemListComponent } from './components/task-item-list/task-item-list.component';
import { CardContainerComponent } from 'src/app/shared/components/card-container/card-container.component';
import { TasksService } from './services/tasks.service';
import { TaskPreviewComponent } from './components/task-preview/task-preview.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskContainerComponent,
    TaskFilterComponent,
    TaskListComponent,
    TaskItemListComponent,
    TaskPreviewComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    CardContainerComponent,
    ReactiveFormsModule
  ],
  exports: [TaskPreviewComponent, TaskFormComponent],
  providers: [TasksService]
})
export class TaskModule { }
