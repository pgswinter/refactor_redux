import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import todoApp from './reducers/TodoAppReducers';
import authReducer from './reducers/RegisterReducers';

// const rootReducer = todoApp
const rootReducer = authReducer
const initialState = {};

const composedEnhancers = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;