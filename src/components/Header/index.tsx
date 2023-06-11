import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  isHidden?: boolean
}

export const Header = ({isHidden=false}: HeaderProps) => {

	return (
		<div className={'flex flex-col items-center w-full gap-4 font-chakra'}>
			<div className={' flex flex-row justify-between items-center pl-2 text-xl font-bold w-7/12 h-8 mt-10 shadow-md text-primary-300 bg-zinc-50 '}>
				<Link to={'/'}><p>Podcaster</p></Link>
				<div className={`bg-primary-300 w-5 h-5 rounded-full animate-bounce mr-9 ${isHidden && 'hidden'}`}></div>
			</div>
		</div>
	)
}
