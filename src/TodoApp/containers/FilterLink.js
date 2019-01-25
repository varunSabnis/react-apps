
import {setVisibilityFilter} from '../actions/action';
import Link from '../components/Link';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import React from 'react';

function mapStateToProps(state,ownProps){
    return({active : ownProps.filter === state.visibilityFilter })
}

function mapDispatchToProps(dispatch,ownProps){
    return({updateVisibilityFilter : () => dispatch(setVisibilityFilter(ownProps.filter))})
}

const FilterLink = function({filter,children}){
     
    return(<NavLink to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
        activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    {children}
    </NavLink>
    );
}

export default FilterLink;

//export default connect(mapStateToProps,mapDispatchToProps)(FilterLink);