import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers/TodoAppReducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = todoApp
const initialState = {};

const composedEnhancers = compose(applyMiddleware(thunk));

const store = createStore(todoApp, initialState, composedEnhancers);

export default store;