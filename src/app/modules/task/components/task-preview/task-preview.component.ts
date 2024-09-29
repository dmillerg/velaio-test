import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTask } from 'src/app/shared/state/selectors/task.selector';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.scss']
})
export class TaskPreviewComponent {

  task$: Observable<any> = new Observable();

  constructor(private store: Store) {
    this.task$ = store.select(selectTask);
  }
}
