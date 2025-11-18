import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";

function Navbar() {
	const [open, setOpen] = useState(false);
	const [textColor, setTextColor] = useState(false);

	const changetextColor = () => {
		window.scrollY >= 900 ? setTextColor(true) : setTextColor(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', changetextColor);
		return () => {
			window.removeEventListener('scroll', changetextColor);
		}
	}, [])

	return (
		<div className={`fixed top-0 flex justify-between px-8 z-1 font-bold w-full text-white ${textColor ? 'bg-white shadow-sm' : ''}`}>

			<div className='py-4'>
				<Link to="/" >
					<img src={`${textColor ? '/logob.svg' : '/logo.svg'}`} alt="" className='w-25 lg:w-35' />
				</Link>
			</div>
			<div className={`hidden lg:flex justify-between items-center gap-14 text-xl font-medium ${textColor ? 'text-black' : ''}`}>
				<Link to="">About</Link>
				<Link to="">Contact</Link>
				<Link to="">Agents</Link>
				<Link to="/login">Sign in</Link>
				<Link to="/" className=''>Sign up</Link>
			</div>

			<div className='fixed right-10 top-10 flex lg:hidden z-6'>
				<SlMenu onClick={() => setOpen((prev) => !prev)} size={30} />
			</div>

			<div className={`${open ? 'right-0 z-5' : 'right-[-50%]'} lg:hidden fixed top-0 h-screen w-[50%] text-2xl pt-22 pb-10 items-center justify-between flex flex-col bg-black text-[#ede6f7] rounded-bl-md px-8 gap-4 transition-all duration-800 ease`}>
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
				<Link to="/">Contact</Link>
				<Link to="/">Agents</Link>
				<Link to="/">Sign in</Link>
				<Link to="/">Sign up</Link>
			</div>
		</div>
	)
}

export default Navbar