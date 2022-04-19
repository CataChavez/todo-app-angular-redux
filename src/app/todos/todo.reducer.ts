import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, deleted, edit, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Use ngrx/store'),
    new Todo('Use ngrx/effects'),
    new Todo('Use ngrx/entity'),
    new Todo('Use ngrx/router'),
    new Todo('Use ngrx/store-devtools'),
    new Todo('Use ngrx/store-validator'),
];

export const todoReducer = createReducer(
    initialState,
    //CREATE
    on(create, (state, { text }) => [...state, new Todo(text)]),
    //TOGGLE
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            } else {
                return todo;
            }
        }) 
    }),
    //EDIT
    on(edit, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                };
            } else {
                return todo;
            }
        }) 
    }),
    //DELETE
    on(deleted, (state, { id }) => { 
        return state.filter(todo => todo.id !== id);
    }),

    on(toggleAll, (state, { completed }) => {
        return state.map(todo => {
            return {
                ...todo,
                completed
            };
        }) 
    })
)