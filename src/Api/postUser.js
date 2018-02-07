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
			'http://localhost:3100/users',
			{
				method:'post',
				data
			}
		)
}