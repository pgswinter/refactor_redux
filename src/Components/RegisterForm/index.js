import React from 'react'
import {connect} from 'react-redux';
import {successRegisterAction} from '../../../redux/RegisterActions'

const RegisterForm = ({dispatch}) => {
	let firstname,
		lastname,
		email,
		age,
		companyId
	return(
		<div className="">
			<form action="">
				<input type="text" name="firstname" ref={node=>{firstname=node}}/></br>
				<input type="text" name="lastname" ref={node=>{lastname=node}}/></br>
				<input type="text" name="email" ref={node=>{email=node}}/></br>
				<input type="text" name="age" ref={node=>{age=node}}/></br>
				<input type="text" name="companyId" ref={node=>{companyId=node}}/></br>
				<button type="submit" onClick={()=>{
					const firstname = firstname.value,
					const lastname = lastname.value,
					const email = email.value,
					const age = age.value,
					const companyId = companyId.value,
					const data = {
						firstname,
						lastname,
						email,
						age,
						companyId
					}
					dispatch(successRegisterAction(data))
				}}>Submit</button>
			</form>
			
		</div>
	)
}