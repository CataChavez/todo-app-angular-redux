import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('physicalInput') physicalInputText!: ElementRef;

  editing: boolean = false;

  completedCheck!: FormControl;
  InputText!: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    
   }

  ngOnInit(): void {

    this.completedCheck = new FormControl(this.todo.completed);
    this.InputText = new FormControl(this.todo.text, Validators.required);

    this.completedCheck.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    })
  }

  editTodo() {
    this.editing = true;
    this.InputText.setValue(this.todo.text);
    setTimeout(() => {
      this.physicalInputText.nativeElement.select();
    }, 1);
  }

  endingEdit() { 
    this.editing = false;
    if (this.InputText.invalid) {
      return;
    }
    if (this.InputText.value === this.todo.text) { 
      return;
    }
    this.store.dispatch(actions.edit({ id: this.todo.id, text: this.InputText.value }));
  }
  
  deleteTodo() { 
    this.store.dispatch(actions.deleted({ id: this.todo.id }));
  }

}
