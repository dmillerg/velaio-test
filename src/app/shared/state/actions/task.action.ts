import { createAction, props } from "@ngrx/store";
import { TASK } from "src/app/core/models/task.model";

export const addTask = createAction(
    '[TASK COMPONENT] add TASK',
    props<{ task: TASK }>()
);

export const getTask = createAction(
    '[TASK COMPONENT] get all TASK',
    props<{ task: ReadonlyArray<TASK> }>()
)

export const deletTask = createAction(
    '[TASK COMPONENT] delete one TASK',
    props<{ task: TASK }>()
)