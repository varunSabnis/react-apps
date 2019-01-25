import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router';
import {Link,Switch} from 'react-router-dom';

//Understanding render prop !! 
/*
class Cat extends Component {

  render(){
    const mousePos = this.props.mouse;
    console.log("in cat")
    return(
        <img src={logo} style={{ position: 'absolute', left: mousePos.x, top: mousePos.y }} />
    )
  }

}

class Mouse extends Component {
  
  constructor(props){
     super(props);
     this.state = {x:0,y:0};
  }
  
  handleMouseMove(event){
    this.setState({x: event.clientX,
      y : event.clientY});
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    
   return(
       <div style={{width : '100%'}} onMouseMove={this.handleMouseMove.bind(this)}>
        { this.props.render }
       </div>
   );
  }
}
*/


//-------------------------------------------------------------------------------------->


//Using higher order components
/*
class Test extends React.Component{

  constructor(props){
    super(props);
  }
   
  render(){
    return(<div>Secret to life is {this.props.secret}</div>);
  }
} 
//export {Cat};
//export default MouseTracker;  
export default Test;
*/


//---------------------------------------------------------------------------------->

// Basic Routing examples in React Js (for browsers) using react-router V4 for SPA
/*
function Home(){
  return(<p>Home</p>);
}

function About(){
  return(<p>About</p>);
}

function Topic(props){
  return(<div>
    {props.match.params.id}
  </div>);
}

function Topics(props){
 
  return(
      <div>
        Topics :
        <br></br>
        <Link to ={`${props.match.url}/react1`}>React1</Link>
        <br></br>
        <Link to = {`${props.match.url}/react2`}>React2</Link>
        <br></br>
        <Link to = {`${props.match.url}/react3`}>React3</Link>
        <br></br>
        <Route exact path={`${props.match.path}`} render={(props)=> <div>Please select a topic
      </div>} />
        
        <Route path={`${props.match.path}/:id`} component={Topic}/>
        </div>
  );
}

class Heading extends React.Component{
   constructor(props){
     super(props);
   }

   render(){
     return(
    <div>
     <Link to='/'>Home</Link>
     <br></br>
     <Link to='/about'>About</Link>
     <br></br>
     <Link to='/topics'>Topics</Link>
     </div>
     );
   }
}

class Main extends React.Component{
  constructor(props){
    super(props);
  }
 render() {
  return(
  <div>
  <Route exact path='/' component={Home} />
  <Route path='/topics' component={Topics}/>
  <Route path='/about' component={About}/>
  </div>
  );
  }
}

class App extends React.Component{
 
  constructor(props){
    super(props);
  }
   
  render(){
    return(
          <div>
           <Heading/>
            <Main/>
            </div>);
  }

}

 */ 
 /*
  TODO - 1. Explore how redirections are handled in RR v4 
         2. Explore Other routers - universal router,router5 etc
         3. Serving static content from server
  */       

//-------------------------------------------------------------------------------------------->

//Switch component to resolve ambiguos Routes
/*
function App() {
  return (
    
      <div>
        <ul>
          <li>
            <Link to="/about">About Us (static)</Link>
          </li>
          <li>
            <Link to="/company">Company (static)</Link>
          </li>
          <li>
            <Link to="/kim">Kim (dynamic)</Link>
          </li>
          <li>
            <Link to="/chris">Chris (dynamic)</Link>
          </li>
        </ul>

        
            Sometimes you want to have a whitelist of static paths
            like "/about" and "/company" but also allow for dynamic
            patterns like "/:user". The problem is that "/about"
            is ambiguous and will match both "/about" and "/:user".
            Most routers have an algorithm to decide for you what
            it will match since they only allow you to match one
            "route". React Router lets you match in multiple places
            on purpose (sidebars, breadcrumbs, etc). So, when you
            want to clear up any ambiguous matching, and not match
            "/about" to "/:user", just wrap your <Route>s in a
            <Switch>. It will render the first one that matches.
      
          <Switch>
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/:user" component={User} />
          </Switch>
      </div>
   
  );
}

function About() {
  return <h2>About</h2>;
}

function Company() {
  return <h2>Company</h2>;
}

function User({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
}
*/
//----------------------------------------------------------------------------------------------->

// To Build a todo app using redux-react 

export default App;

