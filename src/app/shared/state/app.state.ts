import { ActionReducerMap } from '@ngrx/store';
import { TASK } from 'src/app/core/models/task.model';
import { taskReducer } from './reducers/task.reducer';

export interface AppState {
  task: ReadonlyArray<TASK>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  task: taskReducer,
};
