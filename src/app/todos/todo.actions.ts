import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle',
    props<{ id: number }>()
);

export const edit = createAction(
    '[TODO] Edit',
    props<{ id: number, text: string }>()
);

export const deleted = createAction(
    '[TODO] delete',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Completed',
    props<{ completed: boolean }>()
);

export const clearCompleted = createAction(
    '[TODO] Clear completed'
);