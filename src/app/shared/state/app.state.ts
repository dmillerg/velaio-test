import { ActionReducerMap } from '@ngrx/store';
import { TASK } from 'src/app/core/models/task.model';
import { taskReducer } from './reducers/task.reducer';
import { sidebarViewReducer } from './reducers/sidebar-view.reducer';
import { SidebarView } from 'src/app/core/models/sidebar-view.model';
import { peopleReducer } from './reducers/people.reducer';
import { PEOPLE } from 'src/app/core/models/people.model';
import { createtaskReducer } from './reducers/create-task.reducer';

export interface AppState {
  task: ReadonlyArray<TASK>;
  createtask: ReadonlyArray<TASK>;
  people: ReadonlyArray<PEOPLE>;
  sidebarView: ReadonlyArray<SidebarView>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  createtask: createtaskReducer,
  task: taskReducer,
  people: peopleReducer,
  sidebarView: sidebarViewReducer,
};
