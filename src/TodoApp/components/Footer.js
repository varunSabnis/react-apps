import {VISIBILITY_TYPES} from '../actions/action';
import React from 'react';
import FilterLink from '../containers/FilterLink';
export default function Footer(){
return(
    <div>
    Show : 
    <FilterLink filter={VISIBILITY_TYPES.SHOW_ALL}>
        All
    </FilterLink>
    { '  ,'}
    <FilterLink filter={VISIBILITY_TYPES.SHOW_ACTIVE}>
       Active
    </FilterLink>
    {'  ,'}
    <FilterLink filter={VISIBILITY_TYPES.SHOW_COMPLETED}>
       Completed
    </FilterLink>
    </div>);
}
//K1xxSupgrade.txt
//0200057046
