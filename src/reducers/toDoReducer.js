import actionConstants from '../constants/action_constants'

export default function toDoReducer(toDo = {}, action){

  switch(action.type){

    case actionConstants.TOGGLE_TODO:
      return Object.assign({}, toDo, {completed: !toDo.completed})

    default:
      return toDo
  }

}