import { createFeatureSelector } from "@ngrx/store";
import { SidebarView } from "src/app/core/models/sidebar-view.model";

export const selectSidebarView = createFeatureSelector<ReadonlyArray<SidebarView>>('sidebarView');