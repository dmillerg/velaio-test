import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TASK } from 'src/app/core/models/task.model';
import { compareDates } from 'src/app/core/functions/compare-date.functions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnChanges, OnInit {
  @Input() filterData?: boolean;
  filter?: boolean;
  @Input() task: TASK[] = [
    {
      id: 1,
      title: 'My first task',
      expirationDate: new Date(),
      completed: true,
      people: [
        {
          full_name: 'DANIEL MILLER GONZALEZ',
          age: 28,
          skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
        },
      ]
    },
    {
      id: 2,
      title: 'My first task',
      expirationDate: new Date(),
      completed: false,
      people: [
        {
          full_name: 'DANIEL MILLER GONZALEZ',
          age: 28,
          skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
        },
      ]
    },
    {
      id: 2,
      title: 'My first task',
      expirationDate: new Date(),
      completed: false,
      people: [
        {
          full_name: 'DANIEL MILLER GONZALEZ',
          age: 28,
          skill: [{ name: 'Angular' }, { name: 'React' }, { name: 'Nestjs' }, { name: 'Python' }]
        },
      ]
    },
  ];
  todayTask: TASK[] = [];
  upcomingTask: TASK[] = [];
  previousTask: TASK[] = [];

  ngOnInit(): void {
    this.groupTask();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.groupTask();
    this.filter = this.filterData;
  }

  groupTask() {
    this.todayTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === 0);
    this.upcomingTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === 1);
    this.previousTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === -1);
  }
}
