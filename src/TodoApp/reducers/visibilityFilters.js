/*
A reducer takes a previous state and action object and returns a new state that updates the store 

Contains todos reducer to deal with actions pertaining to todo related actions
*/
import * as at from '../actions/actionTypes';
import {VISIBILITY_TYPES} from '../actions/action';

export default function setVibilityFilterReducer(prevState=VISIBILITY_TYPES.SHOW_ALL,action){
     console.log(prevState);
     /*set the visibilityFilter field of the state with users input*/ 
     switch(action.type){
         case at.SET_VISIBILITY_FILTER : return( action.visibilityFilter )
         default : return(prevState)
     }
}


//Vantage# - user 202