import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TASK } from 'src/app/core/models/task.model';
import { compareDates } from 'src/app/core/functions/compare-date.functions';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTask } from 'src/app/shared/state/selectors/task.selector';
import { addTask } from 'src/app/shared/state/actions/task.action';
import { addSidebarView } from 'src/app/shared/state/actions/sidebar-view.action';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnChanges, OnInit, OnDestroy {
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

  task$: Observable<any> = new Observable<any>()
  taskSubscription: Subscription = new Subscription();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.groupTask();
    this.task$ = this.store.select(selectTask);
    this.taskSubscription = this.task$.subscribe({
      next: (value) => {

        value = value[0]
        let date = new Date(value.expirationDate);
        const dateResut = new Date(date.setDate(date.getDate() + 1));

        const task: TASK = {
          id: 1155,
          title: value.title,
          expirationDate: dateResut,
          people: value.people,
          completed: false,
        }
        this.task.push(task);
        this.groupTask();
        setTimeout(() => {
          this.store.dispatch(addSidebarView({ sidebarView: { type: 'preview task' } }))
        }, 500)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.groupTask();
    this.filter = this.filterData;
  }


  ngOnDestroy(): void {
    this.taskSubscription.unsubscribe();
  }


  groupTask() {
    this.todayTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === 0);
    this.upcomingTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === 1);
    this.previousTask = this.task.filter(e => compareDates(e.expirationDate, new Date()) === -1);
  }
}
