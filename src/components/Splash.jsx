
import SearchBar from "./SearchBar";

const Splash = () => {
	return (
		<div className='absolute flex flex-col items-center justify-center w-full  top-50 z-3'>
			<div className='text-white text-center text-7xl lg:text-9xl font-semibold tracking-wider font-davinci'>
			What a Zen life here.
			</div>
			<SearchBar />
		</div>
	)
}

export default Splash