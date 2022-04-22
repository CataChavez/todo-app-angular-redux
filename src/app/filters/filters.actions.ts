import { createAction, props } from "@ngrx/store";

export type validFilter = 'allFilter' | 'completedFilter' | 'pendingsFilter';


// filter action
export const setFilter = createAction(
    '[Filter] Set filter',
     props<{ filter: validFilter }>()
);