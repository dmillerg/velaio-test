import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { TASK } from 'src/app/core/constant/models/task.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  private taskService = inject(TasksService);
  tasks: TASK[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().pipe(map(e => {
      this.tasks = e.map(r => {
        return { ...r, expirationDate: this.getRandomDate() }
      })
    })).subscribe()
  }

  getRandomDate() {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const end = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
  }

}
