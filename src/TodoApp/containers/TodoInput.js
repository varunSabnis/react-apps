import {connect} from 'react-redux';
import {addTodo} from '../actions/action';
import React from 'react';
function TodoInput({dispatch}){
    let input;
    return(
        <div>
            <form onSubmit={(e)=>
            { 
              e.preventDefault(); 
              if(!input.value.trim()){
                  return
              }
              console.log("input value",input.value)
              dispatch(addTodo(input.value))
               input.value='';
               }}>
            
              <input ref={node => input = node} placeholder="enter todo item here" type="text"></input>
               <button style= {{marginLeft : '4px'}} type="submit" value="ADD TODO">ADD TODO</button>
            </form>
        </div>
    )
}
export default connect()(TodoInput)