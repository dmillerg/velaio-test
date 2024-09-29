import { createFeatureSelector } from "@ngrx/store";
import { PEOPLE } from "src/app/core/models/people.model";

export const selectPeople = createFeatureSelector<ReadonlyArray<PEOPLE>>('people');