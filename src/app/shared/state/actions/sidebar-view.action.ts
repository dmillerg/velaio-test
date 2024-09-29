import { createAction, props } from "@ngrx/store";
import { SidebarView } from "src/app/core/models/sidebar-view.model";

export const addSidebarView = createAction(
    '[SidebarView COMPONENT] add SidebarView',
    props<{ sidebarView: SidebarView }>()
);

export const getSidebarView = createAction(
    '[SidebarView COMPONENT] get all SidebarView',
    props<{ sidebarView: ReadonlyArray<SidebarView> }>()
)

export const deletSidebarView = createAction(
    '[SidebarView COMPONENT] delete one SidebarView',
    props<{ sidebarView: SidebarView }>()
)