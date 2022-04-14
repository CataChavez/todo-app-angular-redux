import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Use ngrx/store'),
];

export const todoReducer = createReducer(
    initialState,
    on(create, (state, {text}) => [...state, new Todo(text)]),
);