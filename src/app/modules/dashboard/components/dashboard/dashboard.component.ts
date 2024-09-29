import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PEOPLE } from 'src/app/core/models/people.model';
import { minItemsValidator } from 'src/app/core/validators/min-item.validator';
import { selectSidebarView } from 'src/app/shared/state/selectors/sidebarView.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  open: boolean = false;

  sidebarView$: Observable<any> = new Observable();
  subscription = new Subscription();
  private fb = inject(FormBuilder);
  formPeople = this.fb.group({
    full_name: ['', Validators.required],
    age: [1, Validators.required],
    skill: this.fb.array([], minItemsValidator(1)),
  });

  formTask!: FormGroup;
  people: PEOPLE[] = [];

  constructor(private store: Store) {
    this.sidebarView$ = store.select(selectSidebarView);
    this.subscription = this.sidebarView$.subscribe({
      next: (response) => {
        this.open = response.length > 0;
      }
    })
  }

  addPeople(people: PEOPLE) {
    this.people.push(people);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
