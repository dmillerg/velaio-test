import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { minItemsValidator } from 'src/app/core/validators/min-item.validator';
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
  private fb = inject(FormBuilder);
  form = this.fb.group({
    fullname: ['', Validators.required],
    age: [1, Validators.required],
    skill: this.fb.array([], minItemsValidator(1)),
  })

  constructor(private store: Store) {
    this.task$ = store.select(selectTask);
    this.subscription = this.task$.subscribe({
      next: (response) => {
        this.open = response.length > 0;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
