import { Todo } from './../model/index';
import { Action } from '@ngrx/store';


export const ADD = '[Todos] Add';
export const REMOVE = '[Todos] Remove';
export const LOAD = '[Todos] Load';

export class AddTodo implements Action {
  readonly type = ADD;
  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE;
  constructor(public payload: Todo) {}
}
export type All = AddTodo | RemoveTodo ;
