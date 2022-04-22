import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filters/filters.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilter = "allFilter";
  filters: actions.validFilter[] = [
    'allFilter',
    'completedFilter', 'pendingsFilter'
  ];

  pendings: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => { 
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    })
  }

  changeFilter(filter: actions.validFilter) { 
    this.store.dispatch(actions.setFilter({ filter }));
  }

  clearCompleted() { 
    this.store.dispatch(clearCompleted());
  }
}