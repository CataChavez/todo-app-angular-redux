import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  inputTxt: FormControl;

  constructor(
    private store: Store<AppState>
  ) { 
    this.inputTxt = new FormControl('', Validators.required);
  }

  ngOnInit(): void {

  }

  addTodo() { 
    if (this.inputTxt.invalid) { 
      return;
    }
    this.store.dispatch(actions.create({ text: this.inputTxt.value }));
    this.inputTxt.reset();
  }

}
