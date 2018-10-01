import * as TodoActions from './todo.actions';
import { Todo } from './../model/index';

// const initialTodo: Todo[] = [];
const initialTodo: Todo[] = [
  {id: 1, desc: 'complete Todo as soon as posible', finish: false},
  {id: 2, desc: 'Check Eman Email', finish: false},
];

export function  todoReducer (state: Todo[] = initialTodo, action: TodoActions.All) {

  switch (action.type) {
    case TodoActions.ADD :
        return [
          ...state,
          action.payload
        ];

    case TodoActions.REMOVE :
      return  state.filter((todo) => {
          return  todo.id !== action.payload.id;
        });

    default:
      return state;

  }
}
