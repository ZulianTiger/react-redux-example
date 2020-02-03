import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import myApp from './Redux/Reducers'
import { increment } from './Redux/Actions'

let store = createStore(myApp);

store.subscribe(() => {console.log(store.getState().count)});

//Dispatch
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
