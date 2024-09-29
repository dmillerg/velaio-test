import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TASK } from 'src/app/core/models/task.model';
import { addTask } from 'src/app/shared/state/actions/task.action';
import { selectTask } from 'src/app/shared/state/selectors/task.selector';

@Component({
  selector: 'app-task-item-list',
  templateUrl: './task-item-list.component.html',
  styleUrls: ['./task-item-list.component.scss']
})
export class TaskItemListComponent {
  @Input() task!: TASK;
  @Input() format: 'today' | 'other' = 'today'
  task$: Observable<any> = new Observable();

  constructor(private store: Store) {
    this.task$ = store.select(selectTask);
  }

  selectTask(task: TASK) {
    this.store.dispatch(addTask({ task }))
  }
}
