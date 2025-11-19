import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import InputColor from "../../components/InputColor";

function ListPage(props) {

	const [color, setColor] = useState('')

	const [search, setSearch] = useState({
		type: "All Properties",
		city: "New York",
		minPrice: 0,
		maxPrice: 0
	})

	// request is coming from homepage form
	const location = useLocation();

	useEffect(() => {

		if (location.state) {
			setSearch(location.state.formData)
		}

	}, [location])

	//const {type, city, minPrice, maxPrice} = location.state.formData;

	return (
		<div className="mt-50 flex flex-col items-center mx-auto">
			<div className="grid grid-cols-4 gap-2 p-2 rounded-sm bg-slate-500 border border-slate-600">
				<div className="p-2 text-center bg-slate-500">Type</div>
				<div className="p-2 text-center bg-slate-500">City</div>
				<div className="p-2 text-center bg-slate-500">Min Price</div>
				<div className="p-2 text-center bg-slate-500">Max Price</div>
				<div className="p-2 text-center bg-slate-400">{search.type}</div>
				<div className="p-2 text-center bg-slate-400">{search.city}</div>
				<div className="p-2 text-center bg-slate-400">{search.minPrice}</div>
				<div className="p-2 text-center bg-slate-400">{search.maxPrice}</div>
			</div>

			<div 
				className={`mt-10 w-50 h-50 rounded border flex justify-center items-center p-2`}
				style={{background: `${color}`}}
			>
				This div receives its bg color from its children component
				 here below, with a callback passed as props
			</div>

			<div>
				<InputColor onChange={setColor} />
			</div>
			<div 
				className={`mt-10 w-50 h-50 rounded border flex justify-center items-center p-2`}
				style={{background: `${color}`}}
			>
				This div receives its bg color from its children component
				 here below, with a callback passed as props
			</div>

			<div>
				<InputColor onChange={setColor} />
			</div>
			<div 
				className={`mt-10 w-50 h-50 rounded border flex justify-center items-center p-2`}
				style={{background: `${color}`}}
			>
				This div receives its bg color from its children component
				 here below, with a callback passed as props
			</div>

			<div>
				<InputColor onChange={setColor} />
			</div>

			
		</div>
	)
}

export default ListPage