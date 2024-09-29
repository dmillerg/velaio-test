import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PEOPLE } from 'src/app/core/models/people.model';
import { addPeople } from 'src/app/shared/state/actions/people.action';
import { addSidebarView } from 'src/app/shared/state/actions/sidebar-view.action';

@Component({
  selector: 'app-people-item-list',
  templateUrl: './people-item-list.component.html',
  styleUrls: ['./people-item-list.component.scss']
})
export class PeopleItemListComponent {

  @Input() people!: PEOPLE
  constructor( private store: Store){}

  selectPeople(people: PEOPLE) {
    this.store.dispatch(addPeople({ people }));
    this.store.dispatch(addSidebarView({ sidebarView: { type: 'preview people' } }));
  }
}
