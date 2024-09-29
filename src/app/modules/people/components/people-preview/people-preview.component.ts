import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPeople } from 'src/app/shared/state/selectors/people.selector';

@Component({
  selector: 'app-people-preview',
  templateUrl: './people-preview.component.html',
  styleUrls: ['./people-preview.component.scss']
})
export class PeoplePreviewComponent {

  people$: Observable<any> = new Observable();

  constructor(private store: Store) {
    this.people$ = store.select(selectPeople);
  }
}
