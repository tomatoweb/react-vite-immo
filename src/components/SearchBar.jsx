import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function SearchBar() {

	const navigate = useNavigate()

	const types = ["All Properties", "Buy", "Rent"];

	const [formData, setFormData] = useState({
		type: types[0],
		city: '',
		minPrice: 0,
		maxPrice: 0
	});

	const switchType = (val) => {
		setFormData((prev) => ({ ...prev, type: val }))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/list', { state: { formData } })
	}

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
								`${formData.type === type ? "border border-white bg-gray-100 text-black" : "cursor-pointer"} 
								inline-block p-4 border`
							}
						>
							{type}
						</div>
					))}
				</ul>

			</div>

			{/* Options: city, price min max */}
			<form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center bg-gray-100 rounded-b-lg rounded-r-none sm:rounded-r-lg px-4 text-black gap-1'>
				<input
					value={formData.city}
					onChange={e => setFormData({...formData, city: e.target.value})}
					className='border border-gray-400 px-2 rounded w-40'
					type="text"
					name="city"
					placeholder=
					'City city'
				/>
				<input
					value={formData.minPrice}
					onChange={e => setFormData({...formData, minPrice: e.target.value})}
					className='border border-gray-400 px-2 rounded w-40'
					type="text"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder='min price'
				/>
				<input
				value={formData.maxPrice}
				onChange={e => setFormData({...formData, maxPrice: e.target.value})}
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