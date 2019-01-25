/*
A reducer takes a previous state and action object and returns a new state that updates the store 

Contains todosReducer function to deal with actions pertaining to todo related actions
*/

import * as at from '../actions/actionTypes';



export default function todosReducer(prevState = [],action){
   switch(action.type){
       
       /* Adds new todo to existing list and state gets updated with new list*/
       case at.ADD_TODO : return([
              ...prevState,
              {
                  text : action.text,
                  index : action.index,
                  completed : false
              }
          ])

        /*toggles the todo , by toggling todo.completed flag */
        case at.TOGGLE_TODO :
         console.log(prevState);  
         
            var todos = prevState.map((todo,index)=>{
              if(index==action.index){
                 todo.completed = !todo.completed;
                 return(todo);  
              }     
              return(todo);
           })
           //reorder the array to keep completed todo at the beginning
           var reorderTodos = [];
           var completedTodos = [];
           for(var todo of todos){
               if(todo.completed){
                   completedTodos.push(todo);
               }
               else{
               reorderTodos.push(todo);
               }
           }
           reorderTodos = completedTodos.concat(reorderTodos);
           return(reorderTodos);
        
        default : return(prevState);
   }
}
