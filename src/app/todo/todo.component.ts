import { Todo } from './model/index';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as TodoActions from './store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  todos$: Observable<Todo[]>;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', [
          Validators.required
        ]
      ]
    });

    this.getTodo();
  }
  get todoControls() { return this.todoForm.controls; }

  getTodo() {
     this.todos$ = this.store.select('todo');
  }
  onSubmit() {
    const todo: Todo = {id: Math.random(), desc: this.todoForm.value.todo, finish: false};
    this.store.dispatch(new TodoActions.AddTodo(todo));
  }

  removeTodo(todo) {
    this.store.dispatch(new TodoActions.RemoveTodo(todo));
  }
}
