import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import M from 'materialize-css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { equals, propOr } from 'ramda'

const isDevelopment    =  equals('development', process.env.NODE_ENV)
const composeEnhancers =  isDevelopment ? propOr(compose, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', window) : compose

const store = createStore(reducer, composeEnhancers(applyMiddleware( thunk )))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
M.AutoInit()