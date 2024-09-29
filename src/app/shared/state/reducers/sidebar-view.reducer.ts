import { createReducer, on } from '@ngrx/store';
import { TASK } from 'src/app/core/models/task.model';
import { addSidebarView, deletSidebarView, getSidebarView } from '../actions/sidebar-view.action';
import { SidebarView } from 'src/app/core/models/sidebar-view.model';

export const initialState: ReadonlyArray<SidebarView> = [];

export const sidebarViewReducer = createReducer(
  initialState,
  on(addSidebarView, (sidebarViewold, { sidebarView }) => {
    return [sidebarView];
  }),
  on(getSidebarView, (sidebarViewold, { sidebarView }) => {
    return [...sidebarView];
  }),
  on(deletSidebarView, (sidebarViewold, { sidebarView }) => {
    return [];
  })
);
