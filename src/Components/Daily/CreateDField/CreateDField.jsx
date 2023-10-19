import React from 'react'
import { useState } from 'react'
const CreateDField = ({setTodos}) => {
	const [title, setTitle] = useState('')
	const addTodo = (title) => {
		setTodos(prev=>[{
			_id: new Date(),
			title,
			isComplited: false
		}, ...prev,])
		setTitle('')
	}
	

  return (
	<div className='flex items-center justify-between mb-10 rounded-2xl border-blue700 border-2 px-5 py-3  w-full'>
		<input type='text' onChange={e => setTitle(e.target.value)} 
		value={title} 
		onKeyPress={e => e.key === 'Enter' && addTodo(title)} 
		className='bg-transparent w-full border-none outline-none'
		placeholder='Введите задачу'
		/>
	</div>
  )
}

export default CreateDField