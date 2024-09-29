import { createReducer, on } from '@ngrx/store';
import { PEOPLE } from 'src/app/core/models/people.model';
import { addPeople, deletPeople, getPeople } from '../actions/people.action';

export const initialState: ReadonlyArray<PEOPLE> = [];

export const peopleReducer = createReducer(
  initialState,
  on(addPeople, (peopleold, { people }) => {
    return [people];
  }),
  on(getPeople, (peopleold, { people }) => {
    return [...people];
  }),
  on(deletPeople, (peopleold, { people }) => {
    return [];
  })
);
