import React from 'react'

const Footer = () => {
	return (
		<div>
			<div className='bottom-0 w-full t-12 p-4 bg-gray-800 text-gray-400 text-center '> Made with 💓 and React in {(new Date()).getFullYear()} by Mathias Appelmans Web Development</div>
		</div>
	)
}

export default Footer