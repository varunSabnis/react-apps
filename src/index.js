import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './TodoApp/reducers/index';
import App from './TodoApp/components/App';
import {BrowserRouter,Route} from 'react-router-dom';

//import getFinal from './hoc';
//import Cat from './App';
import * as serviceWorker from './serviceWorker';
//const store = createStore(reducers);
//const FinalComponent = getFinal(Test);
//ReactDOM.render(<FinalComponent/>, document.getElementById('root'));
//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"));
/*
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" component={App}/>
    </BrowserRouter>    
</Provider>,document.getElementById("root"));
*/
/*
ReactDOM.render(<Provider>
  <Layout/>
</Provider>,document.getElementById("main-content"))
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 
// upgrade time  3:55 - 4:35
//downgrade time - 5:05
//135.27.117.161

//5:05 start time 