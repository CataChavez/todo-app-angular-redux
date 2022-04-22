import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./filters/filter.reducer";
import { validFilter } from "./filters/filters.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState { 
    todos: Todo[];
    filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer,
}