import { createAction, props } from "@ngrx/store";
import { PEOPLE } from "src/app/core/models/people.model";

export const addPeople = createAction(
    '[PEOPLE COMPONENT] add PEOPLE',
    props<{ people: PEOPLE }>()
);

export const getPeople = createAction(
    '[PEOPLE COMPONENT] get all PEOPLE',
    props<{ people: ReadonlyArray<PEOPLE> }>()
)

export const deletPeople = createAction(
    '[PEOPLE COMPONENT] delete one PEOPLE',
    props<{ people: PEOPLE }>()
)