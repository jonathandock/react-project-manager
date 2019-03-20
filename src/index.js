import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

import App from './App';
import firebase from './config/firebase.config'
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    /**
     * STORE ENHANCERS
     */
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), // thunk => async call in reducers
    reduxFirestore(firebase), // give the firebase config
    reactReduxFirebase(firebase) // give the firebase config
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
