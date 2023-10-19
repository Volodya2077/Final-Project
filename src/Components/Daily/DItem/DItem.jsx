import {React, useState} from 'react'
import { FaEdit} from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'
import  DCheck from './DCheck'



export default function DItem( {todo, changeTodo, removeTodo, setUpdate} ) {
	const [edit, setEdit] = useState(false)
	
	const handleEditing = () =>{
		edit ? setEdit(false) : setEdit(true)
	}
	const handleUpdatedDone = (event) => {
		if (event.key === 'Enter') {
		  setEdit(false);
		}
	  };
	  let viewMode = {};
	  let editMode = {};
	  if (edit) {
		viewMode.display = 'none';
	  } else {
		editMode.display = 'none';


	  }

  return (
	<div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full '>
	<button className='flex items-center' onClick={() => edit ? null:changeTodo(todo._id) } >
	<DCheck isComplited={todo.isComplited}/> 
	
	
		<span style={viewMode} className={cn({
			'line-through text-red-800 transition-colors ease-in-out duration-400' : todo.isComplited} , edit ? 'invisible': 'visible',)}>
				{todo.title}
				
		</span >
		<input type="text" value={todo.title} style={editMode} onKeyDown={handleUpdatedDone} onChange={(e) => setUpdate(e.target.value, todo._id)} className={cn(edit ? 'bg-gray-700 h-7 outline-cyan-800 px-5 outline-dotted rounded-xl outline-2' : 'invisible' )}/>
		
	</button>
	
	<div> 
	<button onClick={handleEditing}> 
		<FaEdit size={24} className='text-gray-500 mr-3 hover:text-white transition-colors ease-in-out duration-300'/> 
	</button>
	<button onClick={()=> removeTodo(todo._id)}> 
		<BsTrash size={22} className='text-gray-500 hover:text-red-800 transition-colors ease-in-out duration-300'/>
	</button>
	</div>
	</div>
  )
}
