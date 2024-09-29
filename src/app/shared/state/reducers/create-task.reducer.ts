import { createReducer, on } from '@ngrx/store';
import { TASK } from 'src/app/core/models/task.model';
import { addTask, deletTask, getTask } from '../actions/create-task.action';

export const initialState: ReadonlyArray<TASK> = [];

export const createtaskReducer = createReducer(
  initialState,
  on(addTask, (taskold, { task }) => {
    return [task];
  }),
  on(getTask, (taskold, { task }) => {
    return [...task];
  }),
  on(deletTask, (taskold, { task }) => {
    return [];
  })
);
