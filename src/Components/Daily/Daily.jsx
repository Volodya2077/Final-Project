import React, { useEffect } from 'react'
import { useState } from 'react'
import DItem from './DItem/DItem'
import CreateDField from './CreateDField/CreateDField'


export default function Daily( ) {
 
	  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('daval')) || [])
	  localStorage.setItem('daval', JSON.stringify(todos))
	 
	  useEffect(() => {
		
		const timer = setTimeout(() => {
		  setTodos(prevTodos => prevTodos.map(todo => {
			if (todo.isComplited) {
			 
			  return { ...todo, isComplited: false };
			}
			return todo;
		  }));
		}, 60*60*60*24);
		return 

	  }, [...todos]);
	
	  
	
	
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
		  <h1 className='text-2xl font-bold text-center mb-10 py-5  '>Ежедневные задачи</h1>
		  <CreateDField setTodos={setTodos} />
		  {todos.map(todo => (<DItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} setUpdate={setUpdate} />))}
			
	  </div>
	)
  }
  
