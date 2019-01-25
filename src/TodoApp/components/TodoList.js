import React from 'react';
import Todo from './Todo'
export function TodoList({todos,toggle}){
  var todoList = [];
  todoList = todos.map((todo,index) => {
       return(<Todo key={index} text={todo.text} completed={todo.completed} onClick={(e)=>{toggle(index)}}/>);
  });
  console.log("TodoList",todoList);
    return(<ul>{todoList}</ul>);
};



 