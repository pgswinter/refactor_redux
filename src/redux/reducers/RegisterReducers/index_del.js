import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

const registerReducer = (state, action) => {
	
	switch(action.type){
		case 'REGISTER_REQUEST':
			return [
				...state,
				data_gotcha: null,
				completed: 'pending...'
			];
		case 'REGISTER_SUCCESS':
			return [
				...state,
				data_gotcha: action.data,
				completed: 'done'
			];
		case 'REGISTER_REJECT':
			return [
				...state,
				data_gotcha: null,
				completed: 'failed'
			];
		default:
			return state
	}
}

const authReducer = combineReducers({
		routing: routerReducer,
		registerReducer
	}
)

export default authReducer