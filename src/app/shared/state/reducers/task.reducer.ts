import { createReducer, on } from '@ngrx/store';
import { TASK } from 'src/app/core/constant/models/task.model';
import { addTask, deletTask, getTask } from '../actions/task.action';

export const initialState: ReadonlyArray<TASK> = [];

export const taskReducer = createReducer(
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
