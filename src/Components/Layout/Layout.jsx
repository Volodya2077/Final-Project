import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import Daily from '../Daily/Daily'
import Auth from '../Auth/Auth'
import Acc from '../Acc/Acc'

function Layout() {
  return (
	<div className=' py-10 min-h-screen bg-gradient-to-l from-blue-900 to-gray-900'> 
	<header className=' text-gray-600 text-xl space-x-14 text-center font-mono min-w-full border-b-2 py-5 '>
		<h1>Проект Джейранова Владимира</h1>
		<NavLink to='/' >Задачи</NavLink>
		<NavLink to='/daily' >Ежедневные задачи</NavLink>
		<NavLink to='/acc' >Аккаунт</NavLink>
		<NavLink to='/auth' >Авторизация</NavLink>
	</header> 
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/daily' element={<Daily />} />
			<Route path="/auth" element={<Auth />} />
			<Route path='/acc' element={<Acc />} />
		</Routes>
		
	</div>
  )
}
export default Layout
