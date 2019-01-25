/*
   contains functions called action creators that return action objects for each action type
   action object format - {
            type : SOME_ACTION,
            payload : data //data sent to store from application
          }  
*/
import * as at from './actionTypes';
export const VISIBILITY_TYPES = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
};


var todoCount = 0;
/* These action creator functions are dispatched by the mapDispatchToProps function */
export function addTodo(text){
    return{
        type : at.ADD_TODO,
        text : text,
        index : todoCount++
    }
}

export function toggleTodo(id){
    return{
        type : at.TOGGLE_TODO,
        index : id 
    }
}

export function setVisibilityFilter(filter){
  return{
      type : at.SET_VISIBILITY_FILTER,
      visibilityFilter : filter
  }
}