import { createFeatureSelector } from "@ngrx/store";
import { TASK } from "src/app/core/models/task.model";

export const selectTask = createFeatureSelector<ReadonlyArray<TASK>>('task');