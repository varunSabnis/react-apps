import React, { Component } from 'react';
import GetVisibleTodos from '../containers/GetVisibleTodos';
import Footer from './Footer';
import TodoInput from '../containers/TodoInput';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <TodoInput/>
            <GetVisibleTodos filter={this.props.match.params.filter || 'SHOW_ALL'}/>
            <Footer/>
            </div>
        ) 
    }
}

export default App;
