import React, { useState } from 'react'
import TodoItem from './Item/TodoItem' 
import CreateTodoField from './CreateTodoField/CreateTodoField'


function Home() {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('obval')) || [])
	
	localStorage.setItem('obval', JSON.stringify(todos))
	
	

	
	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id) 
		current.isComplited = !current.isComplited 
		setTodos(copy)
	}
	const removeTodo = id =>  
		setTodos([...todos].filter(t=> t._id !== id))

	const setUpdate = (updatedTitle, id) => {
			setTodos(
				[...todos].map((todo) => {
					if (todo._id === id){
					todo.title = updatedTitle
				}
				return todo
				})
			)
		  };
		  


  return (
	<div  className='text-white w-4/5 mx-auto'>
		<h1 className='text-2xl font-bold text-center mb-10 py-5'>Задачи</h1>
		<CreateTodoField setTodos={setTodos} />
		{todos.map(todo => (<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}  setUpdate={setUpdate} />))} 
		
	
	</div>
  )
}

export default Home