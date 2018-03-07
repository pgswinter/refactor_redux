import registerAPI  from '../../../Api/postUser'

export const successRegisterAction = (data) =>{
	return{
		type: 'REGISTER_SUCCESS',
		data_gotcha: registerAPI(data),
		completed: 'done'
	}
}

export const requestRegisterAction = () =>{
	return{
		type: 'REGISTER_REQUEST',
		data_gotcha: null,
		completed: 'pending...'
	}
}

export const rejectRegisterAction = () =>{
	return{
		type: 'REGISTER_REJECT',
		data_gotcha: null,
		completed: 'failed'
	}
}