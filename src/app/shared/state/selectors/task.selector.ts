import { createFeatureSelector } from "@ngrx/store";
import { TASK } from "src/app/core/constant/models/task.model";

export const selectTask = createFeatureSelector<ReadonlyArray<TASK>>('task');