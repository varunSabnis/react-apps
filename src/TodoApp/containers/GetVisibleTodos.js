import {connect} from 'react-redux';
import {VISIBILITY_TYPES} from '../actions/action';
import {toggleTodo} from '../actions/action';
import {TodoList} from '../components/TodoList';

function getVisibleTodos(todos,filter){
    var todoList = [];
    if(todos){
    todoList = todos.filter((todo)=>{
       if(filter === VISIBILITY_TYPES.SHOW_ALL){
           return(true);
       }
       if(filter === VISIBILITY_TYPES.SHOW_COMPLETED){
           return(todo.completed);
       }
       if(filter === VISIBILITY_TYPES.SHOW_ACTIVE){
           return(!todo.completed);
       }
   })
  }
  console.log(" visible todolist",todoList);
   return(todoList);
}

/* todos property containing "list of todos" sent to TodoList component */
function mapStateToProps(state,ownProps){
    return({todos : getVisibleTodos(state.todos,ownProps.filter)})
}

/*toggle function sent as props to TodoList component */
function mapDispatchToProps(dispatch){
    return({toggle : id => dispatch(toggleTodo(id))})
}

/*Container component that sends props to TodoList component */
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);