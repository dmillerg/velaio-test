import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectTask } from 'src/app/shared/state/selectors/task.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  open: boolean = false;

  task$: Observable<any> = new Observable();
  subscription = new Subscription();

  constructor(private store: Store) {
    this.task$ = store.select(selectTask);
    this.subscription = this.task$.subscribe({
      next: (response) => {
        this.open = response.length>0;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
