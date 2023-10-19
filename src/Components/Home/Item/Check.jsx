import React from 'react'
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'
function Check({isComplited}) {
  return (
	<div className={cn('border-2 rounded-lg border-blue-700 w-7 h-7 mr-3 flex items-center justifay-center ',
	 {'bg-blue-400': isComplited }
	)}>
		{isComplited &&	<BsCheck size={24} className='text-white w-4/5 mx-auto' />}
	</div>
  )
}

export default Check;   