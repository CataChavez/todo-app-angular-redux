import { Pipe, PipeTransform } from '@angular/core';
import { validFilter } from '../filters/filters.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilter): Todo[] {
    switch (filter) { 
      case 'completedFilter':
        return todos.filter(todo => todo.completed);
      case 'pendingsFilter':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
