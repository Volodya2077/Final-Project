import React, { useState } from 'react'



export default function Auth() {
	const [username, setUsername] = useState('');
	const [lastname, setLastname] = useState('');


	const handleLogin = (e) => {
		e.preventDefault();
		
		if (username && lastname) {
		  localStorage.setItem('username', username);
		  localStorage.setItem('lastname', lastname);
		  
		}

	
		
	  };


  return (
	
	<div>

	<form onSubmit={handleLogin} className='text-white w-4/5 text-2xl text-center mx-auto'>
      <label >
        Имя:
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
		  placeholder='Введите имя'
		  className='bg-transparent w-full border-spacing-2 '
		  />
      </label>
      <br />
      <label >
        Фамилия:
        <input
          type="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
		  placeholder='Введите фамилию'
		  className='bg-transparent w-full border-spacing-2 '
		  />
      </label>
      <br />
      <button type="submit">Зарегестрироваться</button>
    </form>
	</div>
  )
}
