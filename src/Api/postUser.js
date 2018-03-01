import axios from 'axios';

const getHeaders  = header => {
	return {
		'Content-Type':'application/json'
	}
}
const request = (url, options) =>
	new Promise((resolve,reject)=>{
		axios({
			url,
			...options,
			header: getHeaders(options.header)
		})
		.then(({data})=>{
			if(data.type < 0){
				reject(data);
			}else{
				resolve(data);
			}
		})
		.catch(err=>{
			reject(err);
		});
	});
export const registerAPI = data => {
	return request(
			'http://localhost:3200/products',
			{
				method:'post',
				data
			}
		)
}

export const updateAPI = (data,id) => {
	return request(
			`http://localhost:3200/products/${id}`,
			{
				method:'put',
				data
			}
		)
}

export const deleteAPI = (id) => {
	return request(
			`http://localhost:3200/products/${id}`,
			{
				method:'delete'
			}
		)
}

export const getAPI = () => {
	return request(
			`http://localhost:3200/products/`,
			{
				method:'get'
			}
		)
}

export const getByIdAPI = (id) => {
	return request(
			`http://localhost:3200/products/${id}`,
			{
				method:'get'
			}
		)
}