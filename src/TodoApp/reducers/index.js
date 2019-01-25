import setVisibilityFilterReducer from './visibilityFilters';
import todosReducer from './todos';
import {combineReducers} from 'redux';
/*visibilityFilter and todos are part of the state stored in Redux Store 
 Their values get updated by the Reducer functions 
*/
const reducers = combineReducers({visibilityFilter : setVisibilityFilterReducer,
    todos : todosReducer});

export default reducers;