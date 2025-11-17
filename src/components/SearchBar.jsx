import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar() {

	const types = ["All Properties", "Buy", "Rent"];

	const [query, setQuery] = useState({
		type: types[0],
		location: '',
		minPrice: 0,
		maxPrice: 0
	});

	const switchType = (val) => {
		setQuery((prev) => ({ ...prev, type: val }))
	}

	console.log(query)

	return (
		<div className='z-10 rounded-md text-black  mt-30'>
			<div className="">

				{/* Tabs */}
				<ul className="flex w-fit text-md font-medium text-center text-white ">
					{types.map((type) => (
						<div
							onClick={() => switchType(type)}
							key={type}
							className={
								`${query.type === type ? "border border-white bg-gray-100 text-black" : "cursor-pointer"} 
								inline-block p-4 border`
							}
						>
							{type}
						</div>
					))}
				</ul>

			</div>

			{/* Options: location, price min max */}
			<form action="" className='flex flex-col sm:flex-row items-center bg-gray-100 rounded-b-lg rounded-r-none sm:rounded-r-lg px-4 text-black gap-1'>
				<input
					className='border border-gray-400 px-2 rounded w-40'
					type="text"
					name="location"
					placeholder=
					'City location'
				/>				
				<input
					className='border border-gray-400 px-2 rounded w-40'
					type="text"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder='min price'
				/>
				<input
					className='border border-gray-400 px-2 rounded w-40'
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					placeholder='max price'
				/>
				<button className='cursor-pointer ml-2'>
					<CiSearch className='' size={35} />
				</button>
			</form>
		</div>
	)
}

export default SearchBar