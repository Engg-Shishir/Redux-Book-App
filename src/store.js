import { createStore } from 'redux';
//for create redux store, {createStore} should import  from redux library.

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';


const store = createStore(rootReducer, composeWithDevTools());//(reducer, commect with devtools)

export default store;