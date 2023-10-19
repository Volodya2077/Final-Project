import React from 'react'
import { useState } from 'react';
export default function Acc() {
	const [username, setUsername] = useState(localStorage.getItem('username'));
 	const [lastname, setLastname] = useState(localStorage.getItem('lastname'));
	return(
	<div className='text-white w-4/5 mx-auto'>
		<div className='text-2xl font-bold text-center mb-10 py-5'>Ваше имя: <br/> {username}</div>
		<div className='text-2xl font-bold text-center mb-10 py-5'>Ваша фамилия: <br/> {lastname}</div>
	</div>
  )
}
