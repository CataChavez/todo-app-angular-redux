
import { Action, createReducer, on } from '@ngrx/store';
import { validFilter, setFilter } from './filters.actions';

export const initialState: validFilter = "allFilter";

const _filterReducer = createReducer<validFilter, Action>(
    initialState,
    on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}